import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const user_id = 5;

    const { rows: cartItems } = await sql`
      SELECT * FROM cart WHERE user_id = ${user_id} ORDER BY created_at ASC
    `;

    if (cartItems.length === 0) {
      return NextResponse.json({ cartItems: [] }, { status: 200 });
    }

    return NextResponse.json({ cartItems }, { status: 200 });
  } catch (error) {
    console.error("Error executing SQL query:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
