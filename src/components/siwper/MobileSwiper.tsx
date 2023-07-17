import React, { FC, PropsWithChildren ,useState} from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper";

interface Props{
    onChange?:any
}


const MobileSwiper: FC<PropsWithChildren<Props>> = ({ children,onChange }) => {
  return (
    <Swiper
    effect={"coverflow"}
    centeredSlides={true}
    slidesPerView={2}
    loop={true}
    coverflowEffect={{
      rotate: 80,
      stretch: 10,
      depth: 100,
      modifier: 2,
      slideShadows: true
    }}
    pagination={{
      clickable: true
    }}
      onSlideChange={(val) => onChange?onChange(val):''}
    
      className="w-full swiper_container h-[400px] z-50 "
    >
      {children}
    </Swiper>
  );
};

export default MobileSwiper