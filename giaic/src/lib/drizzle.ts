import { drizzle } from "drizzle-orm/node-postgres";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  uniqueIndex,
  uuid,
  customType,
  boolean,
  date,
  PgDate,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";
import { Pool, types } from "pg";
import { db } from "@vercel/postgres";

export const Applied_Users_Table = pgTable("applied_users", {
  id: serial("id").primaryKey(),
  username: text("name").notNull(),
  phoneNumber: varchar("phone_number").notNull(),
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

export const Experiences_Table = pgTable("experiences", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").primaryKey().notNull(),
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

export const Projects_Table = pgTable("programming_projects", {
  id: serial("id").primaryKey(),
  userId: serial("user_id")
    .references(() => Applied_Users_Table.id)
    .notNull(),
  title: varchar("title").notNull(),
  repoLink: text("repo_link"),
  hostedLink: text("hosted_link"),
  description: text("description"),
});

export type User = InferModel<typeof Applied_Users_Table>;
export type NewUser = InferModel<typeof Applied_Users_Table, "insert">;
export type Experience = InferModel<typeof Experiences_Table>;
export type NewExperience = InferModel<typeof Experiences_Table, "insert">;
export type Project = InferModel<typeof Projects_Table>;
export type NewProject = InferModel<typeof Projects_Table, "insert">;

export const database = drizzle(db);
