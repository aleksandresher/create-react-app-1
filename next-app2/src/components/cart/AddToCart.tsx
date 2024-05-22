"use client";

export default function AddToCart({
  product_id,
  quantity,
}: {
  product_id: number;
  quantity: number;
}) {
  async function handleClick() {
    const product = { product_id, quantity };
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      if (!response.ok) {
        throw new Error("Failed to create product");
      }
    } catch (error) {
      console.log("Error creating product", error);
    }
  }
  return <button onClick={() => handleClick()}>Add to cart</button>;
}
