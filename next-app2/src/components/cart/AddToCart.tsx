"use client";
import { useQueryClient } from "@tanstack/react-query";
export default function AddToCart({
  quantity,
  title,
  price,
  product_id,
}: {
  price: number;
  quantity: number;
  title: string;
  product_id: number;
}) {
  const queryClient = useQueryClient();
  async function handleClick() {
    const product = { title, quantity, price, product_id };
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }
    } catch (error) {
      console.log("Error creating product", error);
    }
  }
  return <button onClick={() => handleClick()}>Add to cart</button>;
}
