import NavBar from "./components/NavBar";
import logo from "./assets/brain-image.png";

function App() {
  return (
    <div>
      <header className="flex justify-between items-center p-8  bg-[#f48c06] h-[60px]">
        <img src={logo} alt="company-logo" className="w-[30px] h-[40px]" />
        <NavBar />
      </header>
    </div>
  );
}

export default App;
