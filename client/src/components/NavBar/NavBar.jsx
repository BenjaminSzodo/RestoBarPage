import React from "react";
import logo from "../../images/LogoResto.png";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between items-center bg-red-950 shadow">
      <div className="flex items-center">
        <img src={logo} alt="LogoResto" className="h-36 w-36 ml-36" />
      </div>
      <div className="hidden md:flex space-x-5 mr-20 items-center">
        <a
          onClick={() => scrollToSection("promos")}
          className="text-custom-orange hover:text-orange-200 text-lg uppercase font-bold"
        >
          Promos
        </a>
        <a
          onClick={() => scrollToSection("menu")}
          className="text-custom-orange hover:text-orange-200 text-lg uppercase font-bold"
        >
          Menu
        </a>
        <a
          onClick={() => scrollToSection("contacto")}
          className="text-custom-orange hover:text-orange-200 text-lg uppercase font-bold"
        >
          Contacto
        </a>

        <div className="flex space-x-4 mr-20 items-center">
          <a href="https://www.instagram.com/mcdonalds_ar/?hl=es-la" target="_blank" className="shadow-lg rounded-full">
          <button className=" h-10 w-10 bg-custom-orange hover:bg-orange-200 rounded-full  flex justify-center items-center">
            <img
              src={
                "https://brandlogos.net/wp-content/uploads/2016/05/Instagram-logo-icon.png"
              }
              alt=""
              className="h-auto w-8 group-hover:stroke-white "
              fill=""
              viewBox="0 0 24 24"
            />
          </button>
          </a>
          <a href="https://www.pedidosya.com.ar/restaurantes/mendoza/mcdonalds-lhz-56fb72e6-7be5-420e-a314-8340e85bfaf4-menu?search=mc" target="_blank" className="shadow-lg rounded-full">
          <button className=" h-10 w-10 bg-custom-orange hover:bg-orange-200 rounded-full  flex justify-center items-center">
            <img
              src={
                "https://cdn.discordapp.com/attachments/1099893415484862465/1166485203355713649/png-transparent-pedidosya-hd-logo-thumbnail.png?ex=654aa900&is=65383400&hm=17b74b71a3198d968243277f081f8c1105c81b8f628398a14fb71cd328a8fbee&"
              }
              alt=""
              className="h-auto w-7 ml-0.5 group-hover:stroke-white "
              style={{ filter: "grayscale(100%) contrast(200%) brightness(0)" }}
              fill=""
              viewBox="0 0 24 24"
            />
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
