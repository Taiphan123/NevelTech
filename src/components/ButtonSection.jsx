import { useState, useEffect } from "react";
import games from "@images/png/icons/games.png";
import providers from "@images/png/icons/providers.png";
import vip from "@images/png/icons/vip.png";
import promotion from "@images/png/icons/promotion.png";
import hotMatch from "@images/png/icons/hot-match.png";
import transaction from "@images/png/icons/p2p.png";
import search from "@images/png/icons/search.png";
import diamondMine from "@images/png/icons/diamond-mine.png";

const ButtonSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttons = isMobile
    ? ["Search", "Games", "Providers"]
    : [
        "Diamond mine",
        "VIP",
        "Promotion",
        "Hot Match",
        "P2P Transaction",
        "Games",
        "Providers",
      ];

  const icons = {
    Search: search,
    Games: games,
    Providers: providers,
    "Diamond mine": diamondMine,
    VIP: vip,
    Promotion: promotion,
    "Hot Match": hotMatch,
    "P2P Transaction": transaction,
  };

  return (
    <section className="flex justify-center space-x-4 px-8 py-4">
      {buttons.map((item, index) => (
        <button
          key={index}
          className={`${
            !["Search", "Games", "Providers"].includes(item)
              ? "border-[#12294A] border"
              : "bg-[#12294A] bg-opacity-90"
          } px-4 py-2 rounded text-white text-sm flex items-center`}
        >
          <img src={icons[item]} alt={item} className="mr-2 h-5 w-5" />
          {item}
        </button>
      ))}
    </section>
  );
};

export default ButtonSection;
