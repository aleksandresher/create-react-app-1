import NavBar from "./components/NavBar";
import logo from "./assets/brain-image.png";
import neurons from "./assets/neurons.gif";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header className="flex justify-between items-center p-8  bg-[#f48c06] h-[60px]">
        <img src={logo} alt="company-logo" className="w-[30px] h-[40px]" />
        <NavBar />
      </header>
      <main className="w-full flex items-center justify-center gap-8 mt-8">
        <section className="flex flex-col items-center">
          <h1 className="text-[40px]">Neuroplasticity</h1>
          <img src={neurons} alt="neurons" className="w-[400px] h-[400px]" />
        </section>
        <section className="w-1/2">
          <p className="leading-8">
            Neuroplasticity, also known as neural plasticity or brain
            plasticity, is a process that involves adaptive structural and
            functional changes to the brain. It is defined as the ability of the
            nervous system to change its activity in response to intrinsic or
            extrinsic stimuli by reorganizing its structure, functions, or
            connections after injuries, such as a stroke or traumatic brain
            injury (TBI).
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
