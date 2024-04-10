"use client";
import { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";

export default function ProductList({ products }) {
  const [productList, setProductList] = useState(products);
  const [originalData, setOriginalData] = useState(products);
  const [search, setSearch] = useState("");
  console.log(search);
  const [sortedDescending, setSortedDescending] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredProducts = originalData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductList(filteredProducts);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search, originalData]);

  const sortProduct = () => {
    const sortedProducts = [...productList].sort((a, b) =>
      sortedDescending ? b.price - a.price : a.price - b.price
    );
    setProductList(sortedProducts);
    setSortedDescending(!sortedDescending);
  };
  return (
    <section className="w-full flex flex-col items-center">
      <Search
        search={search}
        setSearch={setSearch}
        sort={sortProduct}
        sorted={sortedDescending}
      />
      <div className="w-11/12 grid grid-cols-4 gap-7">
        {productList?.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              image={item.images[0]}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
}
