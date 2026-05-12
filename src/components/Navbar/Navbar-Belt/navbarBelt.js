import React, { useState } from "react";
import "./navbarBelt.css";
import amazonLogo from "../../../assets/amazonLogo.png";
import pakistan from "../../../assets/pakistan.png";
import { SlLocationPin } from "react-icons/sl";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarBelt = () => {
  const cartitems = useSelector((state) => state.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-amazon_blue text-white flex flex-col md:flex-row items-center w-full px-2 py-1 md:h-16 gap-2 md:gap-4 sticky top-0 z-50">
      {/* Top Row for Mobile / Single Row for Desktop */}
      <div className="flex items-center justify-between w-full md:w-auto gap-2">
        {/* Mobile Hamburger */}
        <div
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </div>

        {/* Logo */}
        <Link to={"/"} className="flex items-center p-2 hover:border border-white rounded-sm cursor-pointer">
          <img src={amazonLogo} alt="amazonLogo" className="w-20 md:w-24 mt-2 object-contain" />
          <span className="text-xs mt-3">.in</span>
        </Link>

        {/* Location (Hidden on small mobile, shown on md+) */}
        <div className="hidden lg:flex items-center p-2 hover:border border-white rounded-sm cursor-pointer ml-2 gap-2">
          <SlLocationPin size={20} className="flex-shrink-0 mt-1" />
          <div className="flex flex-col justify-center">
            <span className="text-[12px] text-gray-300 leading-tight">Delivering to Karachi</span>
            <span className="text-sm font-bold leading-tight">Update Location</span>
          </div>
        </div>

        {/* Mobile Cart / Account (Visible on mobile) */}
        <div className="flex md:hidden items-center gap-4">
          <Link to={"/cart"} className="relative flex items-center p-2">
            <MdOutlineShoppingCart size={32} />
            <span className="absolute top-1 right-1 bg-amazon_yellow text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartitems.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Search Bar (Full width on mobile, flexible on desktop) */}
      <div className="flex flex-grow items-center h-10 rounded-md overflow-hidden bg-amazon_yellow hover:bg-orange-500 cursor-pointer w-full md:mx-4">
        <div className="hidden md:flex items-center h-full px-4 bg-gray-100 text-gray-600 text-xs border-r border-gray-300 hover:bg-gray-200">
          All <RiArrowDownSFill size={18} />
        </div>
        <input
          type="text"
          className="p-2 h-full w-full flex-grow flex-shrink focus:outline-none text-black"
          placeholder="Search Amazon.in"
        />
        <div className="p-3 h-full flex items-center">
          <IoSearch size={22} className="text-black" />
        </div>
      </div>

      {/* Right Side Nav Items (Hidden on mobile, shown on md+) */}
      <div className="hidden md:flex items-center gap-4 whitespace-nowrap">
        {/* Language */}
        <div className="flex items-center p-2 hover:border border-white rounded-sm cursor-pointer">
          <img src={pakistan} alt="pakFlag" className="w-6 mr-1" />
          <span className="font-bold text-sm">EN</span>
          <RiArrowDownSFill size={16} className="mt-1" />
        </div>

        {/* Account */}
        <div className="flex flex-col p-2 hover:border border-white rounded-sm cursor-pointer">
          <span className="text-xs">Hello, user</span>
          <span className="text-sm font-bold">Account & Lists</span>
        </div>

        {/* Returns */}
        <div className="flex flex-col p-2 hover:border border-white rounded-sm cursor-pointer">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>

        {/* Cart (Desktop) */}
        <Link to={"/cart"} className="relative flex items-center p-2 hover:border border-white rounded-sm cursor-pointer">
          <MdOutlineShoppingCart size={35} />
          <span className="absolute top-1 left-7 bg-amazon_yellow text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartitems.length}
          </span>
          <span className="hidden lg:inline font-bold text-sm mt-4 ml-1">Cart</span>
        </Link>
      </div>

      {/* Mobile Drawer (Overlay) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[60] md:hidden">
          <div className="bg-white text-black w-3/4 h-full flex flex-col shadow-xl">
            <div className="bg-amazon_blue text-white p-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="font-bold">Hello, user</span>
              <MdClose size={28} className="ml-auto cursor-pointer" onClick={() => setIsMenuOpen(false)} />
            </div>
            <div className="p-4 flex flex-col gap-4 overflow-y-auto">
              <Link to="/" className="font-bold text-lg border-b pb-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-gray-500">Shop By Department</span>
                <Link to="/products" className="pl-2" onClick={() => setIsMenuOpen(false)}>Mobiles</Link>
                <Link to="/products" className="pl-2" onClick={() => setIsMenuOpen(false)}>Electronics</Link>
                <Link to="/products" className="pl-2" onClick={() => setIsMenuOpen(false)}>Fashion</Link>
              </div>
              <div className="flex flex-col gap-2 border-t pt-4">
                <span className="font-bold text-gray-500">Help & Settings</span>
                <Link to="#" className="pl-2" onClick={() => setIsMenuOpen(false)}>Your Account</Link>
                <Link to="#" className="pl-2" onClick={() => setIsMenuOpen(false)}>Customer Service</Link>
                <Link to="#" className="pl-2" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarBelt;

