import { pgTable, serial, timestamp, varchar, date } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";
import { UsersTable } from "./users";

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
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Experience = InferModel<typeof ExperiencesTable>;
export type NewExperience = InferModel<typeof ExperiencesTable, "insert">;
