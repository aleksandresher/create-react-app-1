import Footer from "@/components/footer/Footer";
import NavBarWrapper from "@/components/nav/NavBarWrapper";

import ProductList from "@/components/products/ProductsList";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <section>
      <NavBarWrapper />
      <div className="flex justify-center items-center bg-[#f7f8fa] py-12">
        <ProductList products={products.products} />
      </div>
      <Footer />
    </section>
  );
}
