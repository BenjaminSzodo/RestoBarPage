import logo from "../../images/LogoResto.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-red-950 shadow">
      <div className="flex items-center">
        <img src={logo} alt="LogoResto" className="h-36 w-36 ml-36" />
      </div>
      <div className="hidden md:flex space-x-5 mr-20">
        <button className="text-custom-orange hover:text-orange-200 text-lg uppercase font-bold">Promos</button>
        <button className="text-custom-orange hover:text-orange-200 text-lg uppercase font-bold">Menu</button>
        <button className="text-custom-orange hover:text-orange-200 text-lg uppercase font-bold">Contacto</button>
      </div>
    </div>
  );
};

export default NavBar;

