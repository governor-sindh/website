import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { eq, or } from "drizzle-orm";
import { UsersTable, NewUser } from "@/lib/schema/users";
import { NextApiResponse } from "next";
import type { IApplyForm } from "@/types";
import { formCities, formQualifications } from "@/data";

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

  const newForCities = [...formCities, "karachi"];
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

  if (gender !== "female" && gender !== "male") {
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
      throw new Error("This Email Already Occupied!");
    } else if (!!oldUser && oldUser.cnic == cnic) {
      throw new Error("This CNIC Already Occupied!");
    } else if (!!oldUser && oldUser.phoneNumber == phoneNumber) {
      throw new Error("This Phone Number Already Occupied!");
    }

    const users = await db.insert(UsersTable).values(appliedUser).returning();

    return NextResponse.json({
      message: "Applied Successfully",
      users: users,
    });

    // try {
    //   let currentValue: number | "OK" | null;
    //   let newCounter: number;
    //   currentValue = await kv.get("counter");
    //   if (currentValue === null) {
    //     currentValue = await kv.set("counter", 1);
    //     return NextResponse.json({
    //       message: "Applied Successfully",
    //       users: users,
    //       counter: 1,
    //     });
    //   }
    //   newCounter = (currentValue as number) + 1;

    //   const counter = await kv.set("counter", newCounter);

    //   if (counter === null) {
    //     throw new Error("Internal Server Error");
    //   }
    //   if (counter === "OK") {
    //     return NextResponse.json({
    //       message: "Applied Successfully",
    //       users: users,
    //       counter: newCounter,
    //     });
    //   }
    // } catch (error: any) {
    //   return NextResponse.json(
    //     {
    //       message: error.message,
    //     },
    //     {
    //       status: 500,
    //     }
    //   );
    // }
  } catch (error: any) {
    if (error.message.includes("This Email Already Occupied!")) {
      return NextResponse.json(
        {
          message: "This Email is already Occupied!",
        },
        { status: 500 }
      );
    } else if (error.message.includes("This CNIC Already Occupied!")) {
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
    } else {
      return NextResponse.json(
        {
          message: "Internal server error!",
        },
        {
          status: 500,
        }
      );
    }
  }
}
