import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { UsersTable } from "@/lib/schema/users";
import { and, eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const { phoneNumber } = await request.json();

  if (!phoneNumber) {
    return NextResponse.json(
      {
        message: "Add your credentials",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const users = await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.phoneNumber, phoneNumber));
    const user = users[0];

    const { fullName, fatherName, cnic, createdAt } = user;
    return NextResponse.json({
      fullName,
      fatherName,
      cnic,
      dateOfRegistration: createdAt,
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
