import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { eq, or, and } from "drizzle-orm";
import { UsersTable, NewUser } from "@/lib/schema/users";
import { NextApiResponse } from "next";
import type { IApplyForm } from "@/types";
import { emailTemplate } from "@/lib/emailTemplates";

import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.NEXT_PUBLIC_API_KEY!);

import { formCities, formQualifications } from "@/data";
// import { otpCodes } from "@/lib/schema/otpCodes";

const sendConfirmationEmail = () => {
  //   let emailTemplate = `<!DOCTYPE html>
  //     <html>
  //     <head>
  //         <meta charset="UTF-8">
  //         <title>Governor Sindh Initiative</title>
  //         <style>
  //             body {
  //                 font-family: Arial, sans-serif;
  //                 background-color: #f4f4f4;
  //                 margin: 0;
  //                 padding: 0;
  //             }

  //             #container {
  //                 max-width: 600px;
  //                 margin: 0 auto;
  //                 padding: 20px;
  //                 background-color: #ffffff;
  //             }

  //             #logo {
  //                 display: block;
  //                 margin: 0 auto;
  //                 text-align: center;
  //                 margin-bottom: 20px;
  //             }

  //             #content {
  //                 margin-bottom: 20px;
  //             }

  //             #social-links {
  //                 text-align: left;
  //                 margin-top: 20px;
  //             }

  //             #social-links #facebook{
  //               text-decoration: none;
  //               background-color: #3b5998;
  //               padding: 5px;
  //               color:white;

  //             }
  //             #social-links #youtube{
  //               text-decoration: none;
  //               background-color: #c4302b;
  //               padding: 5px;
  //               color:white;
  //             }

  //             @media only screen and (max-width: 600px) {
  //                 #container {
  //                     max-width: 100% !important;
  //                     width: 100% !important;
  //                     padding: 10px !important;
  //                 }
  //             }
  //         </style>
  //     </head>
  //     <body>
  //         <div id="container">
  //             <div id="logo">
  //                 <img src="http://www.governorsindh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9ff76f62.png&w=96&q=75" width="560" height="168" alt="OpenAI" title="" style="width:70px;height:auto;border:0;line-height:100%;outline:none;text-decoration:none" class="CToWUd" data-bit="iit" alt="Governor Sindh Initiative" />
  //             </div>
  //             <div id="content">
  //                 <p>Dear Student,</p>
  //                 <p>Thank you for expressing your interest in the Governor Sindh Initiative for Artificial Intelligence and Web 3 & Metaverse Programs.
  //                 We have received your application, and the next step will be the Entry Test. The venue and date of the Entry Test will be communicated to you through your registered email ID.

  //                 <p>In the meantime, we encourage you to begin preparing for the Entry Test, which will cover the following subjects:</p>
  //                 <ul>
  //                     <li>General English</li>
  //                     <li>General Math</li>
  //                     <li>Aptitude Section</li>
  //                     <li>General Knowledge</li>
  //                 </ul>
  //                 <p>Please join, like, and follow on facebook and youtube for updates regarding admissions, exams, results, and technology updates.</p>
  //             </div>
  //             <div id="social-links">

  // <a id="facebook" href="https://www.facebook.com/XXXXXX/" target="_blank">Facebook</a>

  // <a id="youtube" href="https://www.youtube.com/XXXXXX" target="_blank">YouTube</a>
  //             </div>
  //             <p>Regards,</p>
  //             <p>Team Governor Initiative</p>
  //             <p>Email: support@governorsindh.com</p>
  //             <p>Website: <a href="http://www.governorsindh.com" target="_blank">www.governorsindh.com</a></p>
  //         </div>
  //     </body>
  //     </html>
  //     `;

  return emailTemplate;
};

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
  }: // otp,
  IApplyForm = await request.json();

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
    // || !otp
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
    if (!oldUsers) {
      throw new Error("Internal Server Error");
    }
    const oldUser = oldUsers[0];
    if (!!oldUser && oldUser.email == email) {
      throw new Error("An application with this email already exists.");
    } else if (!!oldUser && oldUser.cnic == cnic) {
      throw new Error("An application with this CNIC already exists.");
    } else if (!!oldUser && oldUser.phoneNumber == phoneNumber) {
      throw new Error("An application with this Phone number already exists.");
    }

    const msg = {
      to: email, // Change to your recipient
      from: "support@governorsindh.com", // Change to your verified sender
      subject: "Verify Email with Governers Website!",
      html: sendConfirmationEmail(),
    };

    ///Commenting out otp code until email is working fine
    // const otpUsers = await db
    //   .select()
    //   .from(otpCodes)
    //   .where(and(eq(otpCodes.email, email), eq(otpCodes.code, otp)));

    // if (!otpUsers) {
    //   throw new Error("Internal Server Error");
    // }
    // const otpUser = otpUsers[0];

    // if (!otpUser) {
    //   throw new Error("Incorrect OTP Entered!");
    // }

    // const userTime = otpUser.expiryTime;
    // const expiryTime = userTime.getTime();

    // const currentDate = new Date();
    // const currentTime = currentDate.getTime();

    // if (expiryTime > currentTime) {
    const users = await db.insert(UsersTable).values(appliedUser).returning();

    await sgMail.send(msg);

    return NextResponse.json({
      message: "Applied Successfully",
      users,
    });
    // } else {
    //   throw new Error("OTP expired. Please click on SEND OTP button.");
    // }
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
