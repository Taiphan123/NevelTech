import bluechipSpace from "@images/png/bluechip-space.png";
import rocketJet from "@images/png/rocket-jet.png";
import roulette from "@images/png/roulette.png";
import launchx from "@images/png/launchx.png";
import jackpot from "@images/png/jackpot.png";
import deepDive from "@images/png/deep-dive.png";
import match from "@images/png/match.png";
import furyBalloon from "@images/png/fury-balloon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SeeAllIcon } from "../SVGs/SeeAllIcon";

const GameSlide = () => {
  const games = [
    { name: "100HP GAMING", imgSrc: bluechipSpace },
    { name: "VELIPLAY", imgSrc: rocketJet },
    { name: "EVOLUTION", imgSrc: roulette },
    { name: "VELIPLAY", imgSrc: launchx },
    { name: "ONLYPLAY", imgSrc: jackpot },
    { name: "VELIPLAY", imgSrc: deepDive },
    { name: "VELIPLAY", imgSrc: match },
    { name: "VELIPLAY", imgSrc: furyBalloon },
    { name: "VELIPLAY", imgSrc: launchx },
  ];

  return (
    <section className="px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Exclusive Games</h2>
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
        spaceBetween={16}
        className="w-full md:max-w-[1440px]"
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
      >
        {games.map((game, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${game.imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="!w-[156px] !h-[210.6px] rounded-lg p-4 text-center"
          >
            <div className="absolute bottom-0 left-0 right-0 text-white text-center py">
              <p>{game.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GameSlide;
