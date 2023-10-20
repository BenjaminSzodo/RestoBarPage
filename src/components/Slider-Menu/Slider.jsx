import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { FreeMode } from "swiper/modules";
import { Navigation } from 'swiper/modules';
import "./slider.css"


const testImageUrls = [
  'https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg',
  'https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg',
  'https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg',
  'https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3ºBA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg',
  'https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg',
  'https://marketplace.canva.com/EAE-YGWeP9A/3/0/1236w/canva-men%C3%BA-impreso-restaurant-hamburguesa-comida-verde-cafe-ECjSz22z47Y.jpg',

];
const numImages = testImageUrls.length;
//.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        navigation={true}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        modules={[FreeMode, Navigation]}
        className="w-full max-w-[95vw] "
      >
        {testImageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col mb-6 group relative  text-white rounded-xl px-6 py-8 overflow-hidden cursor-pointer">
              <div
               className={`${
                // Utiliza el breakpoint "xs" para definir el estilo en pantallas extremadamente pequeñas
                'xs:h-[95vw] md:h-[90vw] lg:h-[40vw]'
              } bg-contain bg-no-repeat bg-center`}
                style={{ backgroundImage: `url(${imageUrl}) `, borderRadius:"30px" }}
              />
              <div className="absolute inset-0 " />
              <div className="relative flex flex-col gap-3 ">
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;