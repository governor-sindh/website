import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { eq, or } from "drizzle-orm";

import { UsersTable, NewUser } from "@/lib/schema/users";
import { ExperiencesTable, NewExperience } from "@/lib/schema/experiences";
import { NextApiResponse } from 'next';
import type { IApplyForm } from "@/types";

export async function POST(request: NextRequest, res: NextApiResponse) {
  console.log("API");
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

    const users = await db.insert(UsersTable).values(appliedUser).returning();

    // experiences?.map(async (experience) => {
    //   const appliedExperience: NewExperience = {
    //     title: experience.title,
    //     industry: experience.industry,
    //     companyName: experience.companyName,
    //     yearsOfExperience: experience.yearsOfExperience,
    //   };
    //   const experiencesData = await db
    //     .insert(ExperiencesTable)
    //     .values(appliedExperience)
    //     .returning();
    //   return experiencesData;
    // });

    return NextResponse.json({ message: "Applied Successfully", users });
  } catch (error: any) {
    console.log("error ", error.message);
    if (error.message.includes("idx_applied_users_email")) {
      return NextResponse.json(
        {
          message: "This email is already occupied!",
        },
        { status: 500 }
      );
      // res.status(400).json({ message: 'This email is already occupied!' });
    } else if (error.message.includes("idx_applied_users_cnic")) {
      return NextResponse.json(
        {
          message: "This CNIC is already occupied!",
        },
        {
          status: 500,
        }
      )
    } else if (error.message.includes("idx_applied_users_phone_number")) {
      return NextResponse.json(
        {
          message: "This Phone number is already occupied!",
        },
        {
          status: 500,
        }
      )

      // return new NextResponse("This Phone number is already occupied!", {
      //   status: 500,
      //   headers: {
      //     "content-type": "application/json"
      //   }
      // });
    } else {
      return NextResponse.json(
        {
          message: "Internal server error!",
        },
        {
          status: 500,
        }
      )

      // return new Response("Internal server error!", {
      //   status: 500,
      //   headers: {
      //     "content-type": "application/json"
      //   }
      // });
    }
  }
}