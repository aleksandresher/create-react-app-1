import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { product_id, quantity } = await request.json();
  const user_id = 5;
  try {
    if (!product_id || !quantity || !user_id) {
      throw new Error("product_id and quantity are required");
    }

    const existingCartItem = await sql`
      SELECT * FROM cart WHERE user_id = ${user_id} AND product_id = ${product_id}
    `;

    if (existingCartItem.rowCount > 0) {
      return NextResponse.json(
        { message: "Item already exists in the cart" },
        { status: 400 }
      );
    }

    await sql`INSERT INTO cart (user_id, product_id, quantity) VALUES (${user_id}, ${product_id}, ${quantity});`;

    return NextResponse.json(
      { message: "Item added to cart successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
