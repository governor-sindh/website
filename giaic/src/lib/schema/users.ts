import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  boolean,
  date,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const UsersTable = pgTable("applied_users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  fatherName: text("father_name").notNull(),
  cnic: varchar("cnic").notNull(),
  phoneNumber: varchar("phone_number").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  gender: text("gender").notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
  highestQualification: text("highest_qualification").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type User = InferModel<typeof UsersTable>;
export type NewUser = InferModel<typeof UsersTable, "insert">;
