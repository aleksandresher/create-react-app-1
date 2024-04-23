import Footer from "../../components/footer/Footer";
import NavBarWrapper from "../../components/nav/NavBarWrapper";

import ProductList from "../../components/products/ProductsList";
import { getTranslations } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function Home({ params }) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("Index");
  const products = await getProducts();
  const { locale } = params;

  return (
    <section>
      <NavBarWrapper />
      <p>{t("name")}</p>
      <div className="flex justify-center items-center bg-[#f7f8fa] py-12">
        <ProductList products={products.products} locale={locale} />
      </div>
      <Footer />
    </section>
  );
}
