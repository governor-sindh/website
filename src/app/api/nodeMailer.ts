import nodemailer from "nodemailer";

export const createConnection = async () => {
  // create reusable transporter object using the default SMTP transport
  return nodemailer.createTransport({
    port: 465,
    host: process.env.NEXT_PUBLIC_HOST!,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_USER_EMAIL!,
      pass: process.env.NEXT_PUBLIC_USER_PASSWORD!,
    },
    debug: true
  });
};
