import NavBar from "./components/NavBar/NavBar";
import Sliders from "./components/Slider-Menu/Slider"
import SlidersPromos from "./components/Slider-Promos/SliderPromos"
import Contact from "./components/Contacto/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-700"> {/* Aquí aplicamos un fondo gris */}
      <div>
        <NavBar />
        <SlidersPromos/>
        <Sliders/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;

