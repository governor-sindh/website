import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { database } from "@/lib/drizzle";
import { Applied_Users_Table, NewUser } from "@/lib/drizzle";

export async function POST(request: NextRequest) {
  const userRequest = await request.json();
  const { username, email, password, cnic } = userRequest;
  if (!username || !email || !password || !cnic) {
    return NextResponse.json(
      {
        message: "Please Add All Credentials",
      },
      {
        status: 400,
      }
    );
  }

  //   const users = await sql`INSERT INTO
  //   "users" (username, email,password,cnic)
  // VALUES
  //   (${username}, ${email},${password},${cnic})
  // RETURNING
  //   *`;
  const users = await database.insert(Applied_Users_Table);
  const allUsers /* : User[] */ = await database
    .select()
    .from(Applied_Users_Table);

  //   const users = await client.sql`SELECT * FROM users;`;
  return NextResponse.json({ users });
}

export async function GET(request: NextRequest) {
await database.
}
