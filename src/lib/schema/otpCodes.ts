import {
  pgTable,
  text,
  numeric,
  integer,
  boolean,
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
    code: integer("code").notNull(),
    expiryTime: timestamp("expiry_date").default(currentDate).notNull(),
  },
  (otpCodes) => {
    return {
      uniqueIdx: uniqueIndex().on(otpCodes.email),
    };
  }
);

export type OTPCode = InferModel<typeof otpCodes>;
export type NewOTPCode = InferModel<typeof otpCodes, "insert">;