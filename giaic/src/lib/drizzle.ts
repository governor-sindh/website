import { drizzle } from "drizzle-orm/node-postgres";
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
import { db } from "@vercel/postgres";

export const UsersTable = pgTable("applied_users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  cnic: varchar("cnic").notNull(),
  phoneNumber: varchar("phone_number").notNull(),
  city: text("city").notNull(),
  email: text("email").notNull(),
  gender: text("gender").notNull(),
  highestQualification: text("highest_qualification").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  github: text("github"),
  linkedin: text("linkedin"),
  discord: text("discord"),
  programmingLanguages: text("programming_languages"),
});

// serial("user_id")
//     .references(() => UsersTable.id)
//     .notNull(),
export const ExperiencesTable = pgTable("experiences", {
  id: serial("id").primaryKey(),
  userId: serial("user_id")
    .references(() => UsersTable.id)
    .notNull(),
  title: varchar("title").notNull(),
  employment_type: varchar("employment_type").notNull(),
  industry: varchar("industry").notNull(),
  companyName: varchar("company_name").notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  currentlyWorking: boolean("currently_working").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const ProjectsTable = pgTable("programming_projects", {
  id: serial("id").primaryKey(),
  userId: serial("user_id")
    .references(() => UsersTable.id)
    .notNull(),
  title: varchar("title").notNull(),
  repoLink: text("repo_link"),
  hostedLink: text("hosted_link"),
  description: text("description"),
});

export type User = InferModel<typeof UsersTable>;
export type NewUser = InferModel<typeof UsersTable, "insert">;
export type Experience = InferModel<typeof ExperiencesTable>;
export type NewExperience = InferModel<typeof ExperiencesTable, "insert">;
export type Project = InferModel<typeof ProjectsTable>;
export type NewProject = InferModel<typeof ProjectsTable, "insert">;

export const database = drizzle(db);
