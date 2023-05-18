import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { UsersTable } from "@/lib/schema/users";
import { and, eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const { cnic, phoneNumber, email } = await request.json();

  if (!cnic || !phoneNumber || !email) {
    return NextResponse.json(
      {
        message: "Add your credentials",
      },
      {
        status: 401,
      }
    );
  }

  const users = await db
    .select()
    .from(UsersTable)
    .where(
      and(
        eq(UsersTable.cnic, cnic),
        eq(UsersTable.phoneNumber, phoneNumber),
        eq(UsersTable.email, email)
      )
    );
  const user = users[0];

  return NextResponse.json({
    message: "Download your admit card",
    user: user,
  });
}
