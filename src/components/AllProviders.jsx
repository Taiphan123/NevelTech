import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SeeAllIcon } from "../SVGs/SeeAllIcon";
import evolution from "@images/png/logo/evolution.png";
import hp from "@images/png/logo/100hp.png";
import bGaming from "@images/png/logo/b-gaming.png";
import smartSoft from "@images/png/logo/smart-soft.png";
import spribe from "@images/png/logo/spribe.png";
import turboGame from "@images/png/logo/turbo-game.png";
import veliplay from "@images/png/logo/veliplay.png";
import wazdan from "@images/png/logo/wazdan.png";

const AllProviders = () => {
  const cardsData = [
    { logo: evolution, name: "Evolution", games: 312 },
    { logo: spribe, name: "Spribe", games: 12 },
    { logo: veliplay, name: "VeliPlay", games: 9 },
    { logo: turboGame, name: "Turbo Games", games: 36 },
    { logo: smartSoft, name: "SmartSoft", games: 37 },
    { logo: hp, name: "100HP Gaming", games: 7 },
    { logo: bGaming, name: "BGaming", games: 166 },
    { logo: wazdan, name: "Wazdan", games: 199 },
  ];

  return (
    <section className="px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">All Providers</h2>
        <div className="flex items-center text-gray-400 cursor-pointer">
          SEE ALL
          <SeeAllIcon className="ml-2" />
        </div>
      </div>
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        }}
        loop={false}
        spaceBetween={12}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 4.5,
          },
          1024: {
            slidesPerView: 6.5,
          },
          1280: {
            slidesPerView: 8.5,
          },
        }}
        className="w-full md:max-w-[1440px] md:mx-[auto] md:px-[54px]"
      >
        {cardsData.map((card, index) => (
          <SwiperSlide
            key={index}
            className="!w-[156px] !h-[122px] rounded-lg text-center grid grid-rows-2"
          >
            <div className="bg-[#12294A] flex items-center justify-center h-full">
              <img src={card.logo} alt={card.name} className="max-h-full" />
            </div>
            <div className="bg-[#F5F9FF0D] flex flex-col items-center justify-center h-full">
              <p className="cursor-pointer underline font-normal text-[13px]">
                {card.name}
              </p>
              <p className="text-[11px] cursor-pointer underline text-[#90A2BD]">
                {card.games} Games
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AllProviders;
