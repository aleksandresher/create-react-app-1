import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

interface NewProductType {
  price: number;
  title: string;
  quantity: number;
  product_id: number;
}

export async function POST(request: Request) {
  const { title, price, quantity, product_id } = await request.json();
  const user_id = 5;
  try {
    if (!title || !quantity || !user_id || !price) {
      throw new Error(
        "Title, price, quantity, product_id and user_id are required"
      );
    }

    const existingItem = await sql`
      SELECT 1 FROM cart WHERE user_id = ${user_id} AND title = ${title} AND price = ${price} AND quantity = ${quantity} and product_id = ${product_id}
    `;

    if (existingItem.rowCount > 0) {
      return NextResponse.json(
        { message: "Item already exists in the cart" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO cart (user_id, title, price, quantity, product_id) VALUES (${user_id}, ${title}, ${price}, ${quantity}, ${product_id})
    `;

    return NextResponse.json(
      { message: "Item added to cart successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
