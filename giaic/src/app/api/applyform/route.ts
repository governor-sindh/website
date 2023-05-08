import { NextRequest, NextResponse } from "next/server";
import { database } from "@/lib/drizzle";
import { eq, or } from "drizzle-orm";

import {
  UsersTable,
  NewUser,
  NewExperience,
  ExperiencesTable,
  ProjectsTable,
  NewProject,
} from "@/lib/drizzle";
import type { IApplyForm } from "@/types/interfaces";

export async function POST(request: NextRequest) {
  const {
    fullName,
    cnic,
    phoneNumber,
    city,
    email,
    gender,
    dateOfBirth,
    highestQualification,
    github,
    linkedin,
    discord,
    programmingLanguages,
    experiences,
    programmingProjects,
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

  const oldUsers = await database
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
    cnic,
    phoneNumber,
    city,
    email,
    gender,
    dateOfBirth,
    highestQualification,
    github,
    linkedin,
    discord,
    programmingLanguages: programmingLanguages?.join(),
  };

  const users = await database
    .insert(UsersTable)
    .values(appliedUser)
    .returning();

  experiences?.map(async (experience) => {
    const users = await database
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
      currentlyWorking: experience.currentlyWorking,
      endDate: experience.endDate,
    };
    const experiencesData = await database
      .insert(ExperiencesTable)
      .values(appliedExperience)
      .returning();
    return experiencesData;
  });

  programmingProjects?.map(async (project) => {
    const users = await database
      .select({ id: UsersTable.id })
      .from(UsersTable)
      .where(eq(UsersTable.email, email));
    const user_id = users[0].id;
    const projectsDone: NewProject = {
      userId: user_id,
      title: project.title,
      repoLink: project.repoLink,
      hostedLink: project.hostedLink,
      description: project.description,
    };
    await database.insert(ProjectsTable).values(projectsDone).returning();
  });

  return NextResponse.json({ message: "Applied Succesfully", users });
}

// export async function GET(request: NextRequest) {
// await database.
// }
