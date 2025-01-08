/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";

const CustomSwiper = ({ slides, ...props }) => {
  return (
    <Swiper
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      }}
      centeredSlides={true}
      loop={true}
      {...props}
    >
      {slides.map((SlideContent, index) => (
        <SwiperSlide key={index}>
          <SlideContent />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default CustomSwiper;
