import React from "react";
import "./navbarBanner.css";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarBanner = () => {
  const options = [
    { name: "Fresh" },
    { name: "Amazon miniTV" },
    { name: "Sell" },
    { name: "Best Sellers" },
    { name: "Today's Deals" },
    { name: "Mobiles" },
    { name: "Electronics" },
    { name: "Prime" },
    { name: "Fashion" },
    { name: "Home & Kitchen" },
  ];
  return (
    <div className="bg-amazon_blue-light text-white flex items-center px-4 h-10 w-full overflow-hidden">
      <div className="flex items-center flex-grow overflow-x-auto scrollbar-hide whitespace-nowrap gap-1 md:gap-4 no-scrollbar">
        <div className="flex items-center p-2 hover:border border-white rounded-sm cursor-pointer min-w-max">
          <MdOutlineMenu size={22} />
          <span className="ml-1 text-sm font-bold">All</span>
        </div>

        {options.map((item, index) => (
          <Link
            to={"/products"}
            className={`p-2 hover:border border-white rounded-sm cursor-pointer text-sm ${index > 4 ? 'hidden lg:inline' : 'inline'}`}
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center ml-auto hover:border border-white rounded-sm cursor-pointer p-1">
        <img
          src="https://f.media-amazon.com/images/G/31/img19/SiddMiniTV/26MayHero/SWM_400x391._CB557661637_.jpg"
          alt="amazonPrime Logo"
          className="h-8 object-contain"
        />
      </div>
    </div>
  );
};

export default NavbarBanner;

