import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { UsersTable } from "@/lib/schema/users";
import { eq, and } from "drizzle-orm";
import { otpCodes } from "@/lib/schema/otpCodes";

export async function POST(request: NextRequest) {
  const { email, otp } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Add all values!" }, { status: 500 });
  }

  try {
    const users = await db
      .select()
      .from(otpCodes)
      .where(and(eq(otpCodes.email, email), eq(otpCodes.code, otp)));

    if (!users) {
      throw new Error("Internal Server Error");
    }
    const user = users[0];
    if (!user) {
      throw new Error("Incorrect OTP Entered!");
    }

    const userTime = user.expiryTime;
    const expiryTime = userTime.getTime();

    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    if (user.code == otp && expiryTime > currentTime) {
      const users = await db
        .select()
        .from(UsersTable)
        .where(eq(UsersTable.email, email));
      const user = users[0];

      if (!user) {
        throw new Error("User with this email does not exist!");
      }
      const { fullName, fatherName, cnic, createdAt, id } = user;
      return NextResponse.json({
        fullName,
        fatherName,
        cnic,
        dateOfRegistration: createdAt,
        studentId: id,
      });
    } else {
      throw new Error("OTP expired! Please click on SEND OTP button.");
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
