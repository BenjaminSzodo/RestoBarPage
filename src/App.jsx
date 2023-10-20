import NavBar from "./components/NavBar/NavBar";
import Sliders from "./components/Slider-Menu/Slider"
import SlidersPromos from "./components/Slider-Promos/SliderPromos"
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <div className="min-h-screen bg-gray-700"> {/* Aquí aplicamos un fondo gris */}
      <div>
        <NavBar />
        <SlidersPromos/>
        <Sliders/>
        <Contacto/>
      </div>
    </div>
  );
}

export default App;

