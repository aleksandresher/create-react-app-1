import { ProductListData } from "../data";
import Card from "../components/Card";
import Search from "../components/Search";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState(ProductListData);
  const [search, setSearch] = useState("");

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
  return (
    <div className="flex flex-col">
      <Search search={search} setSearch={setSearch} />
      <div className="w-full grid grid-cols-4 p-8 gap-6 mt-3">
        {products.map((item) => {
          return (
            <Card
              name={item.name}
              description={item.desctiption}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
