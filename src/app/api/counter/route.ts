import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   try {
//     // Fetch the current counter value from KV or initialize it as 0
//     const currentValue: any = await kv.get("counter");

//     if (!currentValue) {
//       throw new Error("Failed to update counter");
//     }
//     return NextResponse.json({
//       counter: currentValue,
//     });
//   } catch (error: any) {
//     // console.error("Error:", error);
//     return NextResponse.json(
//       {
//         message: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

export async function GET() {
  const user = await kv.get("counter");
  return new Response(JSON.stringify({ counter: user }), {
    headers: { "Content-Type": "application/json" },
  });
}
