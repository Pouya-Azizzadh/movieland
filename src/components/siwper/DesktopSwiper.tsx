import React, { FC, PropsWithChildren ,useState} from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/zoom";

import { EffectCoverflow,EffectFade , Pagination, Navigation } from "swiper";


interface Props{
    onChange?:any
}


const DesktopSwiper: FC<PropsWithChildren<Props>> = ({ children,onChange }) => {
  return (
    <Swiper
      grabCursor={true}
      onSlideChange={(val) => onChange?onChange(val):''}
      centeredSlides={true}
      loop={false}
      slidesPerView={4}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 1.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCoverflow, Pagination, Navigation,EffectFade ]}
      className="w-full swiper_container h-[400px] z-50 "
    >
      {children}
    </Swiper>
  );
};

export default DesktopSwiper;
