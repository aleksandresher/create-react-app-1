"use client";
import Image from "next/image";

export default async function SingleProduct() {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = res.json();
  console.log(product);

  return (
    <div className="flex flex-col">
      <Image
        src={product?.iamge[0]}
        // alt={product.title}
        width={100}
        height={100}
      />
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
    </div>
  );
}
