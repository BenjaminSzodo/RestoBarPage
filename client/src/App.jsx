import NavBar from "./components/NavBar/NavBar";
import SlidersPromos from "./components/Slider-Promos/SliderPromos";
import Sliders from "./components/Slider-Menu/Slider";
import Contact from "./components/Contacto/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-700">
      <div>
        <NavBar />
        <section id="promos" className="mt-14">
          <SlidersPromos />
        </section>
        <section id="menu" className="mt-20">
          <h2 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl text-custom-orange antialiased flex justify-start ml-40 uppercase">
            <span className="underline">Menu</span>
            <span className="inline-block ml-1 animate-pulse">:</span>
          </h2>
          <Sliders />
        </section>
        <section id="contacto" className="mt-20">
          <h2 className="title-font mb-20 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl text-custom-orange antialiased flex justify-start ml-40 uppercase">
            <span className="underline">Contacto</span>
            <span className="inline-block ml-1 animate-pulse">:</span>
          </h2>
          <Contact className=''/>
        </section>
      </div>
    </div>
  );
}

export default App;


