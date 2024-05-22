import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { product_id, quantity } = await request.json();
  const user_id = 5;
  try {
    if (!product_id || !quantity)
      throw new Error("product_id and quantity are required");

    await sql`INSERT INTO cart_item_id (user_id, product_id, quantity) VALUES (${user_id}, ${product_id}, ${quantity});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  return NextResponse.json({ message: "No action taken" }, { status: 400 });
}
