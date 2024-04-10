import SingleProduct from "@/components/SingleProduct";

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
      <SingleProduct product={product} />
    </section>
  );
}
