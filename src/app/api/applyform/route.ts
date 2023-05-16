import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { eq, or } from "drizzle-orm";

import { UsersTable, NewUser } from "@/lib/schema/users";
import {
  ExperiencesTable,
  Experience,
  NewExperience,
} from "@/lib/schema/experiences";

import type { IApplyForm } from "@/types";

export async function POST(request: NextRequest) {
  const {
    fullName,
    fatherName,
    cnic,
    phoneNumber,
    city,
    email,
    gender,
    dateOfBirth,
    highestQualification,
    experiences,
  }: IApplyForm = await request.json();

  // await sql.query(`
  //     CREATE TABLE IF NOT EXISTS users (
  //       id SERIAL PRIMARY KEY,
  //       name VARCHAR(255) NOT NULL,
  //       email VARCHAR(255) UNIQUE NOT NULL,
  //       image VARCHAR(255),
  //       "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  //     );
  // `)

  const oldUsers = await db
    .select()
    .from(UsersTable)
    .where(
      or(
        eq(UsersTable.email, email),
        eq(UsersTable.phoneNumber, phoneNumber),
        eq(UsersTable.cnic, cnic)
      )
    );

  const oldUser = oldUsers[0];
  if (oldUser) {
    return NextResponse.json(
      { message: "User Already Exist" },
      {
        status: 409,
      }
    );
  }

  if (
    !fullName ||
    !email ||
    !phoneNumber ||
    !cnic ||
    !city ||
    !gender ||
    !highestQualification ||
    !dateOfBirth
  ) {
    return NextResponse.json(
      { message: "Add All Credentials" },
      {
        status: 404,
      }
    );
  }

  const appliedUser: NewUser = {
    fullName,
    fatherName,
    cnic,
    phoneNumber,
    city,
    email,
    gender,
    dateOfBirth,
    highestQualification,
  };

  const users = await db.insert(UsersTable).values(appliedUser).returning();

  experiences?.map(async (experience) => {
    const users = await db
      .select({ id: UsersTable.id })
      .from(UsersTable)
      .where(eq(UsersTable.email, email));
    const user_id = users[0].id;
    const appliedExperience: NewExperience = {
      userId: user_id,
      title: experience.title,
      employment_type: experience.employmentType,
      industry: experience.industry,
      companyName: experience.companyName,
      startDate: experience.startDate,
      endDate: experience.endDate,
    };
    const experiencesData = await db
      .insert(ExperiencesTable)
      .values(appliedExperience)
      .returning();
    return experiencesData;
  });

  return NextResponse.json({ message: "Applied Succesfully", users });
}

// export async function GET(request: NextRequest) {
// await db.
// }
