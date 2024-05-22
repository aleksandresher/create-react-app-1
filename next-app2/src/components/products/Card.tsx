"use client";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "../../app/locales/client";
import CreateProduct from "./CreateProduct";
import AddToCart from "../cart/AddToCart";

interface PageProps {
  title: string;
  image: string;
  price: number;
  id: number;
  locale: string;
}

export default function Card({ title, image, price, id, locale }: PageProps) {
  const t = useI18n();
  return (
    // <Link href={`/${locale}/products/${id}`}>
    <div className="grid grid-cols-1 items-center shadow-lg rounded-[10px] py-5 gap-2 dark:bg-white  ">
      <span className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-[250px] h-[250px] rounded-lg"
        />
      </span>

      <span className="flex flex-col items-center">
        <h1 className="dark:text-black">{title}</h1>
        <div className="flex gap-2 items-center h-[40px] mt-2">
          <p className="dark:text-black">Price:</p>
          <p className="text-green-600">{price}$</p>
        </div>
      </span>

      <div className="flex justify-center">
        {/* <CreateProduct title={title} price={price} /> */}
        {/* <button className="bg-[#faedcd] p-3 rounded-md  dark:bg-[#c78170]">
            {t("addToCard")}
          </button> */}
        <AddToCart product_id={id} quantity={1} />
      </div>
    </div>
    // </Link>
  );
}
