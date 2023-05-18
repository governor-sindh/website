import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { otpCodes } from "@/lib/schema/otpCodes";
export async function POST(request: NextRequest) {
  const { email, code } = await request.json();
  try {
    const data = await db.insert(otpCodes).values({ email, code }).returning();
    console.log(data);
    return NextResponse.json({
      message: "OTP sent to email",
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
