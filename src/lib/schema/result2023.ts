import {
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
    uniqueIndex,
    date,
    numeric,
    integer,
    boolean,
    index,
  } from "drizzle-orm/pg-core";
  import { InferModel, desc } from "drizzle-orm";
  
  export const ResultTable = pgTable(
    "result2023",
    {
      id: serial("id").primaryKey().notNull(),
      status: text("status").notNull()
    }
  );
  
  export type Result = InferModel<typeof ResultTable>;
  export type NewResult = InferModel<typeof ResultTable, "insert">;
  