"use client";
import { ProductListData } from "../data";
import Card from "../components/Card";
import Search from "../components/Search";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState(ProductListData);
  const [search, setSearch] = useState("");
  const [sortedDescending, setSortedDescending] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredProducts = ProductListData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(filteredProducts);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) =>
      sortedDescending ? b.price - a.price : a.price - b.price
    );
    setProducts(sortedProducts);
    setSortedDescending(!sortedDescending);
  };
  return (
    <div className="flex flex-col">
      <Search
        search={search}
        setSearch={setSearch}
        sort={sortProducts}
        sorted={sortedDescending}
      />
      <div className="w-full grid grid-cols-4 p-8 gap-6 mt-3">
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              description={item.desctiption}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
