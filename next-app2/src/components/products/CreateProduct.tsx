"use client";

export default function CreateProduct({
  title,
  price,
}: {
  title: string;
  price: number;
}) {
  async function handleClick() {
    const product = { title, price };
    try {
      const response = await fetch("/api/product/create", {
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
