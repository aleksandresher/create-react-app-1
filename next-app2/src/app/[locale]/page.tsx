// import Footer from "../../components/footer/Footer";
import NavBarWrapper from "../../components/nav/NavBarWrapper";

import ProductList from "../../components/products/ProductsList";
// import { getTranslations } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import { ProductApiResponse } from "../../utils/types";
import { Locale } from "../../../messages/i18n.config";
import { getDictionary } from "../../../messages/dictionaries";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductApiResponse = await res.json();
  return data.products;
}

interface PageProps {
  params: {
    locale: Locale;
  };
}

export default async function Home({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  // const t = await getTranslations("Blog");
  const products = await getProducts();
  console.log(locale);

  const dict = await getDictionary(locale);

  return (
    <section>
      <NavBarWrapper locale={locale} />
      <div className="flex justify-center items-center bg-[#f7f8fa] py-12 dark:bg-black">
        <ProductList products={products} dict={dict.homePage} locale={locale} />
      </div>
      {/* <Footer locale={locale} /> */}
    </section>
  );
}
