import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { eq, or } from "drizzle-orm";
import { sql } from "@vercel/postgres";

import { UsersTable, NewUser } from "@/lib/schema/users";
import { ExperiencesTable, NewExperience } from "@/lib/schema/experiences";

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

  try {
    await db.select().from(UsersTable);
  } catch (e: any) {
    if (e.message === `relation "applied_users" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );

      await sql.query(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE TABLE IF NOT EXISTS applied_users (
      id uuid DEFAULT uuid_generate_v1() PRIMARY KEY,
      full_name TEXT NOT NULL,
      father_name TEXT NOT NULL,
      cnic VARCHAR(255) NOT NULL,
      phone_number VARCHAR(255) NOT NULL,
      city TEXT NOT NULL,
      email TEXT NOT NULL,
      gender TEXT NOT NULL,
      date_of_birth TIMESTAMP NOT NULL,
      highest_qualification TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS experiences (
      id SERIAL PRIMARY KEY,
      user_id uuid REFERENCES applied_users(id),
      title VARCHAR(50) NOT NULL,
      industry VARCHAR(255) NOT NULL,
      company_name VARCHAR(255) NOT NULL,
      years_of_experience VARCHAR(50) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
    `);

      console.log("Table Created");
    } else {
      throw e;
    }
  }

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
      industry: experience.industry,
      companyName: experience.companyName,
      yearsOfExperience: experience.yearsOfExperience,
    };
    const experiencesData = await db
      .insert(ExperiencesTable)
      .values(appliedExperience)
      .returning();
    return experiencesData;
  });
  return NextResponse.json({ message: "Applied Succesfully", users });
}
