import SingleProduct from "@/components/products/SingleProduct";
import SingleProductSkeleton from "@/components/skeletons/SingleProductPageSkeleton";
import { Suspense } from "react";

async function getProduct({ id }) {
  const res = await fetch(`https://dummyjson.com/product/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function SingleProductPage({ params }) {
  const { id } = params;
  const product = await getProduct({ id });
  return (
    <section className="flex justify-center mt-9">
      <Suspense fallback={<SingleProductSkeleton />}>
        <SingleProduct product={product} />
      </Suspense>
    </section>
  );
}
