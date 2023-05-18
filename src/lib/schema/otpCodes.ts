import {
  pgTable,
  text,
  numeric,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

const currentDate = new Date();
currentDate.setHours(currentDate.getHours() + 2);

export const otpCodes = pgTable(
  "otp_codes",
  {
    email: text("email").notNull(),
    code: numeric("code", { precision: 6 }).notNull(),
    expiryTime: timestamp("expiry_date").default(currentDate),
  },
  (otpCodes) => {
    return {
      uniqueIdx: uniqueIndex().on(otpCodes.email),
    };
  }
);

export type OTPCode = InferModel<typeof otpCodes>;
export type NewOTPCode = InferModel<typeof otpCodes, "insert">;
