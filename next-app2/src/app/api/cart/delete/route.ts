import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const { productId } = await request.json();
  const user_id = 5;

  try {
    if (!productId) {
      throw new Error("product_id is required");
    }

    const result = await sql`
      DELETE FROM cart
      WHERE user_id = ${user_id} AND product_id = ${productId}
      RETURNING *
    `;

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "Item not found in the cart" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Item removed from cart successfully",
        removedItem: result.rows[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error executing SQL query:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
