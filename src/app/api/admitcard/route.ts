import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { UsersTable } from "@/lib/schema/users";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
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
