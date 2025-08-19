import React from "react";
import "./footer.css";
import amazonLogo from "../../assets/amazonLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerdetils">
        <div className="detilsBox">
          <div className="contentFooterTitle">Get To Know Us</div>
          <ul className="contentFooterList">
            <li>About Us</li>
            <li>Carrers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="detilsBox">
          <div className="contentFooterTitle">Connect With Us</div>
          <ul className="contentFooterList">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className="detilsBox">
          <div className="contentFooterTitle">Make Money With Us</div>
          <ul className="contentFooterList">
            <li>Sell on Amazon</li>
            <li>Affiliate Program</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay</li>
          </ul>
        </div>
        <div className="detilsBox">
          <div className="contentFooterTitle">Let Us Help You</div>
          <ul className="contentFooterList">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="footerImage">
        <img src={amazonLogo} alt="amazonlogo" />
      </div>
    </footer>
  );
};

export default Footer;
