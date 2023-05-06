import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { database } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import {
  Applied_Users_Table,
  NewUser,
  NewExperience,
  Experiences_Table,
  Projects_Table,
  NewProject,
} from "@/lib/drizzle";
import type { IApplyForm } from "@/types/interfaces";

export async function POST(request: NextRequest) {
  const {
    username,
    phoneNumber,
    email,
    gender,
    highestQualification,
    github,
    linkedin,
    discord,
    programmingLanguages,
    experiences,
    programmingProjects,
  }: IApplyForm = await request.json();

  if (programmingLanguages) {
    const programmingSkills = programmingLanguages.join(" ");
    console.log(programmingSkills);
  }

  const oldUsers = await database
    .select()
    .from(Applied_Users_Table)
    .where(eq(Applied_Users_Table.email, email));

  const oldUser = oldUsers[0];
  if (oldUser) {
    return NextResponse.json(
      { message: "User Already Exist" },
      {
        status: 409,
      }
    );
  }

  if (!username || !email || !phoneNumber) {
    return NextResponse.json(
      { message: "Add All Credentials" },
      {
        status: 404,
      }
    );
  }

  const appliedUser: NewUser = {
    username,
    phoneNumber,
    email,
    gender,
    highestQualification,
    github,
    linkedin,
    discord,
    programmingLanguages: programmingLanguages?.join(),
  };

  let experienceData;
  let projectsData;
  experiences?.forEach(async (experience) => {
    const appliedExperience: NewExperience = {
      title: experience.title,
      employment_type: experience.employmentType,
      industry: experience.industry,
      companyName: experience.companyName,

      startDate: experience.startDate,
      currentlyWorking: experience.currentlyWorking,
      endDate: experience.endDate,
    };
    experienceData = await database
      .insert(Experiences_Table)
      .values(appliedExperience)
      .returning();
  });

  programmingProjects?.forEach(async (project) => {
    const projectsDone: NewProject = {
      title: project.title,
      repoLink: project.repoLink,
      hostedLink: project.hostedLink,
      description: project.description,
    };
    projectsData = await database.insert(Projects_Table).values(projectsDone);
  });

  const users = await database
    .insert(Applied_Users_Table)
    .values(appliedUser)
    .returning();

  if (experienceData && projectsData) {
    return NextResponse.json({ users, experienceData, projectsData });
  }
  //   const users = await client.sql`SELECT * FROM users;`;
  return NextResponse.json({ users });
}

// export async function GET(request: NextRequest) {
// await database.
// }
