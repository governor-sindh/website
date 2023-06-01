import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { otpCodes } from "@/lib/schema/otpCodes";
import { eq } from "drizzle-orm";
import { UsersTable } from "@/lib/schema/users";

export async function POST(request: NextRequest) {
  const { email, code } = await request.json();
  try {
    const users = await db
      .select()
      .from(otpCodes)
      .where(eq(otpCodes.email, email));
    const user = users[0];
    if (user.code === code) {
      return NextResponse.json({
        message: "OTP Verified",
      });
    } else {
      throw new Error("Incorrect OTP");
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}
