import { drizzle } from "drizzle-orm/node-postgres";
// import { Client } from "pg";
// const client = new Client({
//   connectionString:
//     "postgres://hamzaadil56:aSBW7CF0GUTl@ep-wispy-snowflake-401377-pooler.ap-southeast-1.aws.neon.tech/giaic?sslmode=require",
// });
// client.connect();

import { sql } from "@vercel/postgres"
export const db = drizzle(sql);

// export const ProjectsTable = pgTable("programming_projects", {
//   id: serial("id").primaryKey(),
//   userId: serial("user_id")
//     .references(() => UsersTable.id)
//     .notNull(),
//   title: varchar("title").notNull(),
//   repoLink: text("repo_link"),
//   hostedLink: text("hosted_link"),
//   description: text("description"),
// });

// export type Project = InferModel<typeof ProjectsTable>;
// export type NewProject = InferModel<typeof ProjectsTable, "insert">;

// export const database = drizzle(db);
