import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { FreeMode} from "swiper/modules";
import { Navigation } from 'swiper/modules';



const testImageUrls = [
"https://cdn.printnetwork.com/production/assets/themes/5966561450122033bd4456f8/imageLocker/5f206dc35d4bff1ada62fb4c/blog/blog-description/1647973541988_restaurant-banner.png",
"https://img.lovepik.com/background/20211020/large/lovepik-banner-active-background-page-material-image_400073936.jpg",
"https://img.lovepik.com/background/20211020/large/lovepik-banner-active-background-page-material-image_400073936.jpg",

];
const numImages = testImageUrls.length;
//.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after

const SliderPromos = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        navigation={true}
        loop={true}
        modules={[ Navigation]}
        className="w-full max-w-[100vw] "
      >
        {testImageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col mb-6 group relative  text-white rounded-xl px-6 py-8 overflow-hidden cursor-pointer">
              <div
               className={`${
                // Utiliza el breakpoint "xs" para definir el estilo en pantallas extremadamente pequeñas
                'xs:h-[100vw] md:h-[90vw] lg:h-[30vw]'
              } bg-cover bg-no-repeat bg-center`}
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

export default SliderPromos;