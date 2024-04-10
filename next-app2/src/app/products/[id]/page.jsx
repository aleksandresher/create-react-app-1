import SingleProduct from "@/components/SIngleProduct";

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = res.json();
  console.log(data);

  if (!data || !data.products) {
    return [];
  }
  return data.products.map((product) => ({
    id: product.id,
  }));
}

export default function SingleProductPage({ params }) {
  const { id } = params;
  return (
    <section>
      <SingleProduct id={id} />
    </section>
  );
}
