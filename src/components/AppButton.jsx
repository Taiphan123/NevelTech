import { useState } from "react";
import android from "@images/png/logo/android.png";
import ios from "@images/png/logo/ios.png";
import AccordionSection from "./AccordionSection";
import SocialIcons from "./SocialIcons";
import AppButton from "./AppButton";

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
          <SocialIcons size="h-[35px] w-[35px]" />
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
            <AppButton src={android} alt="Android" label="Bluechip App" subLabel="for Android" />
            <AppButton src={ios} alt="iOS" label="Bluechip App" subLabel="for iOS" />
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
          <SocialIcons />
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
            <AppButton src={android} alt="Android" label="Android" />
            <AppButton src={ios} alt="iOS" label="iOS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;