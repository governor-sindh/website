import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { UsersTable } from "@/lib/schema/users";
import { EntranceResultTable } from "@/lib/schema/entrance_exam_result";

export async function POST(request: NextRequest) {
  const { id } = await request.json();
  const convertIdToNumber = Number(id);
  if (!convertIdToNumber) {
    throw new Error("Enter your ID!");
  }

  try {
    //Old User
    const oldUsers = await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.id, convertIdToNumber));

    if (!oldUsers || oldUsers.length === 0) {
      throw new Error("User with this id not found!");
    }

    const oldUser = oldUsers[0];

    const getResults = await db
      .select()
      .from(EntranceResultTable)
      .where(eq(EntranceResultTable.id, convertIdToNumber));

    if (!getResults || getResults.length === 0) {
      throw new Error("Result doesn't exists!");
    }

    const getResult = getResults[0];

    return NextResponse.json({
      status: getResult.status,
      id: getResult.id,
      name: oldUser.fullName,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
