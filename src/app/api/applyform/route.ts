import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { and, eq, or } from "drizzle-orm";

import { UsersTable, NewUser } from "@/lib/schema/users";
import { ExperiencesTable, NewExperience } from "@/lib/schema/experiences";
import { NextApiResponse } from "next";
import type { IApplyForm } from "@/types";

export async function POST(request: NextRequest, res: NextApiResponse) {
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
  }: IApplyForm = await request.json();

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
      { message: "Fields are empty!" },
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

  try {
    const oldUsers = await db
      .select()
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
