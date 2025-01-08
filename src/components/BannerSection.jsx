import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import pig from "@images/png/pig.png";
import { InfoIcon } from "../SVGs";

const BannerSection = () => {

  const slideData = [
    {
      title: "Exclusive Tournament",
      description: "Piggy Christmas Tap: \n €35,000 For Your Wins",
      buttonText: "Join and Win",
      imgSrc: pig,
    },
    {
      title: "Exclusive Tournament",
      description: "Piggy Christmas Tap: \n €35,000 For Your Wins",
      buttonText: "Discover More",
      imgSrc: pig,
    },
    {
      title: "Exclusive Tournament",
      description: "Piggy Christmas Tap: \n €35,000 For Your Wins",
      buttonText: "Discover More",
      imgSrc: pig,
    },
    {
      title: "Exclusive Tournament",
      description: "Piggy Christmas Tap: \n €35,000 For Your Wins",
      buttonText: "Discover More",
      imgSrc: pig,
    },
  ];

  return (
    <section className="px-8 py-6">
      <Swiper
        breakpoints={{
          1440: {
            slidesPerView: 1.5,
            spaceBetween: 45,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        }}
        centeredSlides
        loop
      >
        {slideData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex md:flex-row flex-col justify-center items-center md:mt-0 mt-10 bg-gradient-to-r from-[#147261] to-[#082C25] rounded-3xl p-0 md:p-6">
              <img
                src={data.imgSrc}
                alt="slide"
                className="mt-[-60px] md:hidden w-1/2 h-auto object-contain"
              />
              <div className="flex flex-col items-center">
                <div className="text-[21px] rounded-[79px] bg-opacity-10 w-[236px] bg-white text-center font-semibold">
                  {data.title}
                </div>
                <div>
                  <div className="whitespace-pre-line text-[24px] font-medium md:text-[42px] md:font-extrabold mx-8 md:mx-0 my-3 md:p-2 text-center">
                    {data.description}
                  </div>
                </div>
                <button className="w-auto md:w-[340px] h-[50px] font-normal text-[21px] bg-[#FF0960] px-6 py-2 rounded-[10px] hover:bg-pink-400 mb-12">
                  {data.buttonText}
                </button>
              </div>
              <img
                src={data.imgSrc}
                alt="slide"
                className="hidden md:block w-1/2 h-auto object-contain"
              />
              <div className="absolute top-3 right-3 justify-center items-center">
                <InfoIcon />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default BannerSection;
