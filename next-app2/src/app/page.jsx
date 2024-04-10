import ProductList from "@/components/ProductsList";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  // console.log(products);

  return (
    <div className="flex justify-center items-center bg-[#f7f8fa] py-12">
      <ProductList products={products.products} />
    </div>
  );
}
