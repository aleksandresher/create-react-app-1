import { ProductListData } from "../data";
import Card from "../components/Card";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Search />
      <div className="w-full grid grid-cols-4 p-8 gap-6 mt-3">
        {ProductListData.map((item) => {
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
