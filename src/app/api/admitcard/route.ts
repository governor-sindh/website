import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { UsersTable } from "@/lib/schema/users";
import { eq, and } from "drizzle-orm";
import { otpCodes } from "@/lib/schema/otpCodes";

export async function POST(request: NextRequest) {
  const { email, code } = await request.json();

  if (!email || !code) {
    return NextResponse.json({ message: "Add all values!" }, { status: 500 });
  }

  try {
    const users = await db
      .select()
      .from(otpCodes)
      .where(and(eq(otpCodes.email, email), eq(otpCodes.code, code)));

    if (!users) {
      throw new Error("Internal Server Error");
    }
    const user = users[0];
    if (!user) {
      throw new Error("Incorrect OTP");
    }

    const userTime = user.expiryTime;
    const expiryTime = userTime.getHours();
    console.log("expiry time", expiryTime);

    const currentDate = new Date();
    const currentTime = currentDate.getHours();

    console.log("currentTime", currentTime);

    if (user.code === code && expiryTime > currentTime) {
      return NextResponse.json({
        message: "OTP Verified",
      });
    }
    if (expiryTime < currentTime) {
      throw new Error("OTP expired. Please click on SEND OTP button.");
    }
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }

  try {
    const users = await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.email, email));
    const user = users[0];

    const { fullName, fatherName, cnic, createdAt, id } = user;
    return NextResponse.json({
      fullName,
      fatherName,
      cnic,
      dateOfRegistration: createdAt,
      studentId: id,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "User not found",
      },
      {
        status: 404,
      }
    );
  }
}
