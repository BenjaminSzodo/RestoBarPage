import NavBar from "./components/NavBar/NavBar";

import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="min-h-screen bg-gray-700"> {/* Aquí aplicamos un fondo gris */}
      <div>
        <NavBar />
      </div>
      <div className=''>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

