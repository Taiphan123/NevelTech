import { useState } from "react";
import fb from "@images/png/icons/fb.png";
import instagram from "@images/png/icons/instagram.png";
import telegram from "@images/png/icons/telegram.png";
import twitter from "@images/png/icons/twitter.png";
import android from "@images/png/logo/android.png";
import ios from "@images/png/logo/ios.png";
import AccordionSection from "./AccordionSection";
// import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="px-8 py-6">
      <div className="md:hidden">
        <AccordionSection
          title="Games"
          items={["Game 1", "Game 2", "Game 3", "Game 14"]}
          isOpen={openSection === "games"}
          onClick={() => toggleSection("games")}
        />
        <AccordionSection
          title="About"
          items={[
            "About Us",
            "Promotions",
            "VIP",
            "Help Center",
            "Awards & Certificates",
            "App",
          ]}
          isOpen={openSection === "about"}
          onClick={() => toggleSection("about")}
        />
        <AccordionSection
          title="Legal Information"
          items={[
            "General Terms & Conditions",
            "Responsible Gaming Policy",
            "Sports Betting Rules",
            "Privacy and Cookies Policy",
            "Payment Methods",
            "Limits",
          ]}
          isOpen={openSection === "legal"}
          onClick={() => toggleSection("legal")}
        />
        <div className="flex flex-col items-center">
          <span className="text-center mb-4 text-[15px]">Follow Us</span>
          <div className="flex justify-center">
            <div className="flex justify-between w-[300px] space-x-4">
              <img
                src={telegram}
                alt="Telegram"
                className="h-[35px] w-[35px] cursor-pointer"
              />
              <img
                src={fb}
                alt="Facebook"
                className="h-[35px] w-[35px] cursor-pointer"
              />
              <img
                src={instagram}
                alt="Instagram"
                className="h-[35px] w-[35px] cursor-pointer"
              />
              <img
                src={twitter}
                alt="Twitter"
                className="h-[35px] w-[35px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[50px]">
          <div className="w-full bg-[#1A3157] px-6 py-3 mb-2 rounded-lg text-white flex justify-between items-center space-x-2">
            <div>
              <h3 className="text-lg font-medium mb-2">Help Center</h3>
              <p className="text-[#90A2BD] font-[15px] mb-4">
                If you have any questions?
              </p>
            </div>
            <button className="bg-[#3555FF] text-white px-6 py-2 rounded-[10px] text-[13px]">
              GET ANSWERS
            </button>
          </div>
          <div className="flex w-full space-x-2">
            <button className="flex-grow flex px-5 bg-[#1A3157] py-2 rounded-lg text-white items-center justify-center">
              <img
                src={android}
                alt="Android"
                className="h-[42px] w-[42px] mr-2"
              />
              <div className="text-start">
                <p>Bluechip App</p>
                <p className="text-[#90A2BD]">for Android</p>
              </div>
            </button>
            <button className="flex-grow flex bg-[#1A3157] py-2 px-5 rounded-lg text-white items-center justify-center">
              <img src={ios} alt="iOS" className="h-[42px] w-[42px] mr-2" />
              <div className="text-start">
                <p>Bluechip App</p>
                <p className="text-[#90A2BD]">for iOS</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-between">
        <div>
          <h3 className="text-lg font-medium mb-2">Help Center</h3>
          <p className="text-[#90A2BD] font-[15px] mb-4">
            If you have any questions?
          </p>
          <button className="bg-[#3555FF] text-white px-6 py-2 rounded-[10px] text-[13px]">
            GET ANSWERS
          </button>
          <div className="flex space-x-4 mt-[40px]">
            <img
              src={telegram}
              alt="Telegram"
              className="h-5 w-5 cursor-pointer"
            />
            <img src={fb} alt="Facebook" className="h-5 w-5 cursor-pointer" />
            <img
              src={instagram}
              alt="Instagram"
              className="h-5 w-5 cursor-pointer"
            />
            <img
              src={twitter}
              alt="Twitter"
              className="h-5 w-5 cursor-pointer"
            />
          </div>
        </div>

        {/* Games Section */}
        <div>
          <h3 className="text-[15px] font-medium mb-5">Games</h3>
          <ul className="space-y-5 text-[#90A2BD]">
            <li>Game 1</li>
            <li>Game 2</li>
            <li>Game 3</li>
            <li>Game 14</li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-[15px] font-medium mb-5">About</h3>
          <ul className="space-y-5 text-[#90A2BD]">
            <li>About Us</li>
            <li>Promotions</li>
            <li>VIP</li>
            <li>Help Center</li>
            <li>Awards & Certificates</li>
            <li>App</li>
          </ul>
        </div>

        {/* Legal Information Section */}
        <div>
          <h3 className="text-[15px] font-medium mb-5">Legal Information</h3>
          <ul className="space-y-5 text-[#90A2BD]">
            <li>General Terms & Conditions</li>
            <li>Responsible Gaming Policy</li>
            <li>Sports Betting Rules</li>
            <li>Privacy and Cookies Policy</li>
            <li>Payment Methods</li>
            <li>Limits</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-[#1A3157] px-6 py-3 mb-2 rounded-lg text-white flex justify-center items-center space-x-2">
            <img src={ios} alt="Mac OS" className="h-[42px] w-[42px]" />
            <div>
              <p>Bluechip App</p>
              <p>for Mac OS</p>
            </div>
          </button>
          <div className="flex justify-between space-x-2">
            <button className="px-5 bg-[#1A3157] py-2 rounded-lg text-white  items-center justify-center">
              <img
                src={android}
                alt="Android"
                className="h-[42px] w-[42px] mr-2"
              />
              <span className="text-[#90A2BD]">Android</span>
            </button>
            <button className=" bg-[#1A3157] py-2 px-5 rounded-lg text-white  items-center justify-center">
              <img src={ios} alt="iOS" className="h-[42px] w-[42px] mr-2" />
              <span className="text-[#90A2BD]">iOS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
