import maps from "../../images/maps.png";

const Contact = () => {
  const numeroTelefono = "+543437516768"
  return (
  <div>
    <div className="w-full h-20  flex items-center justify-between pb-14">
      <h1 className="text-2xl ml-10 uppercase text-orange-200 font-bold">
        Ubicacion/Localidad
      </h1>
      <div className="flex justify-center items-center mr-20 space-x-8 ">
        <a
          href="https://maps.app.goo.gl/XzufSpSxCnxY6Gq17"
          target="_blank"
          className="shadow-lg rounded-full"
        >
          <button className="bg-white hover:bg-gray-200 h-20 w-20 rounded-full flex justify-center items-center">
            <img
              src={maps}
              alt=""
              className="h-auto w-8 mr-0.5 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            />
          </button>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5492612510791"
          target="_blank"
          className="shadow-lg rounded-full"
        >
          <button className="bg-green-500 hover:bg-green-700 h-20 w-20 rounded-full flex justify-center items-center">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
              }
              alt=""
              className="h-auto w-12 group-hover:stroke-white "
              fill="none"
              viewBox="0 0 24 24"
            />
          </button>
        </a>

        <a href={`tel:${numeroTelefono}`} target="_blank" className="shadow-lg rounded-full">

          <button className="bg-blue-600 hover:bg-blue-800 h-20 w-20 rounded-full flex justify-center items-center">
            <img
              src={
                "https://i.pinimg.com/originals/9d/de/92/9dde9204f9c3ff502e78211b34e1b68d.png"
              }
              alt=""
              className="h-auto w-10 group-hover:stroke-white"
              style={{ filter: "invert(100%)" }}
              fill="none"
              viewBox="0 0 24 24"
            />
          </button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Contact;
