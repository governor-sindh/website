import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    await sql.query(`
    
    CREATE TABLE IF NOT EXISTS applied_users (
      id SERIAL PRIMARY KEY NOT NULL,     
      full_name TEXT NOT NULL,
            father_name TEXT NOT NULL,
            cnic VARCHAR(255) NOT NULL,
            phone_number VARCHAR(255) NOT NULL,
            city TEXT NOT NULL,
            email TEXT NOT NULL,
            gender TEXT NOT NULL,
            date_of_birth TIMESTAMP NOT NULL,
            highest_qualification TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
          );
          CREATE UNIQUE INDEX idx_applied_users_email ON applied_users (email);
          CREATE UNIQUE INDEX idx_applied_users_cnic ON applied_users (cnic);
          CREATE UNIQUE INDEX idx_applied_users_phone_number ON applied_users (phone_number);
                    `);

    return NextResponse.json({ message: "created" });
  } catch (error) {
    return NextResponse.json({
      message: "Not Created",
    });
  }
}

// CREATE TABLE IF NOT EXISTS experiences (
//   id SERIAL PRIMARY KEY,
//   title VARCHAR(50) NOT NULL,
//   industry VARCHAR(255) NOT NULL,
//   company_name VARCHAR(255) NOT NULL,
//   years_of_experience VARCHAR(50) NOT NULL,
//   created_at TIMESTAMP DEFAULT NOW(),
//   updated_at TIMESTAMP DEFAULT NOW()
// );
