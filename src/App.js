import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-end items-center  bg-[#f48c06] h-[50px]">
        <NavBar />
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
