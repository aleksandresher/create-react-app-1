import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, price } = await request.json();

  try {
    if (!title || !price) throw new Error("title and price are required");

    await sql`INSERT INTO products (title, price) VALUES (${title}, ${price});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;

  return NextResponse.json({ products }, { status: 200 });
}
