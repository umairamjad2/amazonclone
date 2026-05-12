import React from "react";
import "./footer.css";
import amazonLogo from "../../assets/amazonLogo.png";

const Footer = () => {
  return (
    <footer className="bg-amazon_blue-light text-white pt-10 pb-10">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Get To Know Us</h3>
          <ul className="text-sm flex flex-col gap-2 text-gray-300">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press Releases</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Connect With Us</h3>
          <ul className="text-sm flex flex-col gap-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">Facebook</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Make Money With Us</h3>
          <ul className="text-sm flex flex-col gap-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Sell on Amazon</li>
            <li className="hover:underline cursor-pointer">Affiliate Program</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer">Amazon Pay</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Let Us Help You</h3>
          <ul className="text-sm flex flex-col gap-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Returns Centre</li>
            <li className="hover:underline cursor-pointer">100% Purchase Protection</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col items-center gap-4">
        <img src={amazonLogo} alt="amazonlogo" className="w-24 object-contain mt-2" />
        <div className="flex flex-wrap justify-center gap-6 text-[10px] text-gray-400">
           <span className="hover:underline cursor-pointer">Conditions of Use & Sale</span>
           <span className="hover:underline cursor-pointer">Privacy Notice</span>
           <span className="hover:underline cursor-pointer">Interest-Based Ads</span>
           <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

