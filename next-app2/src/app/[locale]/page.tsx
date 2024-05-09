import NavBarWrapper from "../../components/nav/NavBarWrapper";
import ProductList from "../../components/products/ProductsList";
import { unstable_setRequestLocale } from "next-intl/server";
import { ProductApiResponse } from "../../utils/types";
import { Locale } from "../../../messages/i18n.config";
import { getDictionary } from "../../../messages/dictionaries";
import FooterWrapper from "../../components/footer/FooterWrapper";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products/all");

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

export default async function Home({
  params: { locale },
}: {
  params: { locale: "en" | "ka" };
}) {
  // unstable_setRequestLocale(locale);
  const products = await getProducts();
  // console.log(locale);
  // const dict = await getDictionary(locale);

  return (
    <section className=" flex flex-col min-h-screen">
      <NavBarWrapper locale={locale} />
      <div className="flex justify-center items-start bg-[#f7f8fa] py-12 flex-grow  dark:bg-black">
        <ProductList products={products} locale={locale} />
      </div>

      <FooterWrapper />
    </section>
  );
}
