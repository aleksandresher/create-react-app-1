import SingleProduct from "../../../../../components/products/SingleProduct";

interface ProductProps {
  id: number;
}
// export async function generateStaticParams() {
//   const products = await fetch("https://dummyjson.com/products").then((res) =>
//     res.json()
//   );

//   return products.products.map((product: ProductProps) => ({
//     id: product.id.toString(),
//   }));
// }

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/single/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await getProduct(id);
  return (
    <section className="flex justify-center mt-9">
      <SingleProduct product={product} />
    </section>
  );
}
