/* eslint-disable react/prop-types */
import fb from "@images/png/icons/fb.png";
import instagram from "@images/png/icons/instagram.png";
import telegram from "@images/png/icons/telegram.png";
import twitter from "@images/png/icons/twitter.png";

const SocialIcons = ({ size = "h-5 w-5" }) => {
  return (
    <div className="flex space-x-4">
      <img src={telegram} alt="Telegram" className={`${size} cursor-pointer`} />
      <img src={fb} alt="Facebook" className={`${size} cursor-pointer`} />
      <img src={instagram} alt="Instagram" className={`${size} cursor-pointer`} />
      <img src={twitter} alt="Twitter" className={`${size} cursor-pointer`} />
    </div>
  );
};

export default SocialIcons;