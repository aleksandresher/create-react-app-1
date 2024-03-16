import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import { ProductListData } from "./data";
import Card from "./components/Card";
import Search from "./components/Search";
function App() {
  return (
    <div>
      <header className="flex justify-end items-center  bg-[#f48c06] h-[50px]">
        <NavBar />
      </header>
      <Search />
      <main className="w-full grid grid-cols-4 p-8 gap-6 mt-3">
        {ProductListData.map((item) => {
          return (
            <Card
              name={item.name}
              description={item.desctiption}
              image={item.image}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
