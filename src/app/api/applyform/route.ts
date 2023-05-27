import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { and, eq, or } from "drizzle-orm";

import { UsersTable, NewUser } from "@/lib/schema/users";
// import { ExperiencesTable, NewExperience } from "@/lib/schema/experiences";
import { NextApiResponse } from "next";
import type { IApplyForm } from "@/types";
import { formCities } from "@/data";
import { formQualifications } from "@/data";

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

  if (fullName.length < 3 || fullName.length > 1000) {
    return NextResponse.json(
      {
        message: "Invalid Full name length!",
      },
      {
        status: 500,
      }
    );
  }

  if (fatherName.length < 3 || fatherName.length > 1000) {
    return NextResponse.json(
      {
        message: "Invalid Full name length!",
      },
      {
        status: 500,
      }
    );
  }

  if (email.length > 1000) {
    return NextResponse.json(
      {
        message: "Invalid Email length!",
      },
      {
        status: 500,
      }
    );
  }

  let newForCities = [...formCities, "karachi"];
  if (!newForCities.includes(city)) {
    return NextResponse.json(
      {
        message: "Invalid City!",
      },
      {
        status: 500,
      }
    );
  }

  if (!formQualifications.includes(highestQualification)) {
    return NextResponse.json(
      {
        message: "Invalid Qualification!",
      },
      {
        status: 500,
      }
    );
  }

  if (phoneNumber.toString().length !== 12) {
    return NextResponse.json(
      {
        message: "Invalid phone number length!",
      },
      {
        status: 500,
      }
    );
  }

  if (cnic.toString().length !== 13) {
    return NextResponse.json(
      {
        message: "Invalid cnic length!",
      },
      {
        status: 500,
      }
    );
  }

  if(gender !== "female" && gender !== "male"){
    return NextResponse.json(
      {
        message: "Invalid Gender",
      },
      {
        status: 500,
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
      .where(
        or(
          eq(UsersTable.email, email),
          eq(UsersTable.cnic, cnic),
          eq(UsersTable.phoneNumber, phoneNumber)
        )
      );
    const oldUser = oldUsers[0];
    if (!!oldUser && oldUser.email == email) {
      console.log('147')
      throw new Error("This Email Already Occupied!");
    } else if (!!oldUser && oldUser.cnic == cnic) {
      console.log('150')
      throw new Error("This CNIC Already Occupied");
    } else if (!!oldUser && oldUser.phoneNumber == phoneNumber) {
      console.log('153')
      throw new Error("This Phone Number Already Occupied!");
    }

    const users = await db.insert(UsersTable).values(appliedUser).returning();

    return NextResponse.json({ message: "Applied Successfully", users });
  } catch (error: any) {
    console.log("error ", error);
    if (error.message.includes("This Email Already Occupied!")) {
      return NextResponse.json(
        {
          message: "This Email Already Occupied!",
        },
        { status: 500 }
      );
      // res.status(400).json({ message: 'This email is already occupied!' });
    } else if (error.message.includes("This CNIC Already Occupied")) {
      return NextResponse.json(
        {
          message: "This CNIC is already occupied!",
        },
        {
          status: 500,
        }
      );
    } else if (error.message.includes("This Phone Number Already Occupied!")) {
      return NextResponse.json(
        {
          message: "This Phone number is already occupied!",
        },
        {
          status: 500,
        }
      );

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
      );

      // return new Response("Internal server error!", {
      //   status: 500,
      //   headers: {
      //     "content-type": "application/json"
      //   }
      // });
    }
  }
}
