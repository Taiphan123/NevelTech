import logo from "@images/svg/logo.svg";
import { MenuIcon, SearchIcon } from "../SVGs";

const menuItems = [
  { name: "HOME", href: "#" },
  { name: "GAME", href: "#" },
  { name: "INFO", href: "#" },
  { name: "NEWS", href: "#" },
  { name: "PROMOTIONS", href: "#" },
  { name: "VIP", href: "#" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between shadow-custom">
      <nav className="w-full">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <MenuIcon />
              <img src={logo} className="h-8" alt="Logo" />
            </a>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="hidden justify-center items-center md:flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
                <li>
                  <a href="#" aria-current="page">
                    <SearchIcon />
                  </a>
                </li>
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      aria-current="page"
                      className="font-sans text-sm font-medium leading-6 tracking-wide text-left underline-offset-4"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-light rounded-[10px] px-[11px] py-[5px] mr-2">
              LOGIN
            </button>
            <button className="bg-green rounded-[10px] px-[11px] py-[5px]">
              REGISTRATION
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
