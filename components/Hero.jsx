import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import "../app/globals.css";
// Install Swiper modules
SwiperCore.use([Scrollbar, A11y, EffectFade, Autoplay]);

export const Hero = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"fade"}
      autoplay= {{
        delay: 3000,
      }}
      fadeEffect={{
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      className=""
    >
      <div className="mx-4">
      {slides.map((slide) => (
        <SwiperSlide key={slide.image} >
        <div className="relative mt-5">
        <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-5xl sm:text-6xl md:text-8xl lg:text-8xl tracking-wider text-white font-bold">WISMATA</div>
          <div className="text-white text-xl sm:text-xl md:text-2xl lg:text-3xl font-damion w-3/4">Temukan keunikan UMKM lokal di setiap destinasi wisata</div>
        </div>
        <img src={slide.image} alt={slide.title} className="rounded-xl"/>
      </div>
        </SwiperSlide>
      ))}
      </div>
    </Swiper>
  );
};
