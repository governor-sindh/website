import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  try {
    // Fetch the current counter value from KV or initialize it as 0
    const currentValue: any = await kv.get("counter");

    // Increment the counter value by 1
    const newCounter = currentValue + 1;

    // Store the updated counter value in KV
    await kv.set("counter", newCounter);

    // return new Response(JSON.stringify({ counter: newCounter }), {
    //   headers: { "Content-Type": "application/json" },
    // });

    return NextResponse.json({
      counter: newCounter,
    });
  } catch (error) {
    // console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Failed to update counter" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
