import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { UsersTable } from "@/lib/schema/users";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const users = await db
      .select()
      .from(UsersTable)
      .orderBy(desc(UsersTable.id))
      .limit(1);
    const user = users[0];

    if (!users) {
      throw new Error("Failed to fetch users!");
    }

    if (!users.length) {
      return NextResponse.json({
        counter: 0,
        users,
      });
    }
    return NextResponse.json({
      counter: user.id,
      users,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
