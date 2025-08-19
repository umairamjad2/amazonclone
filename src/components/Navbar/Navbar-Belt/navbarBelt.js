import React from "react";
import "./navbarBelt.css";
import amazonLogo from "../../../assets/amazonLogo.png";
import pakistan from "../../../assets/pakistan.png";
import { SlLocationPin } from "react-icons/sl";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarBelt = () => {
  const cartitems = useSelector((state) => state.cart.items);
  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <Link to={"/"} className="leftNavBeltLogo">
          <img src={amazonLogo} alt="amazonLogo" />
          <span>.in</span>
        </Link>
        <div className="leftNavBeltLoaction">
          <div className="loactionImg">
            <SlLocationPin
              className="img"
              style={{
                fontSize: "22px",
                width: "15px",
                padding: "7px",
                marginTop: "3px",
              }}
            />
          </div>
          <div className="locationText">
            <div className="locationTextTop">Delivering to Karachi 75800</div>
            <div className="locationTextDown">Update Loaction</div>
          </div>
        </div>
      </div>
      <div className="navbarBeltSearchBox">
        <div className="SearchBoxDiv">
          <span className="SearchBoxAll">
            All <RiArrowDownSFill style={{ fontSize: "20px" }} />
          </span>
          <input
            type="text"
            className="SearchBoxInput"
            placeholder="Search Amazon.in"
          />
          <span className="SearchBtn">
            <IoSearch style={{ fontSize: "22px" }} />
          </span>
        </div>
      </div>
      <div className="rightNavBelt">
        <div className="pakFlagCode">
          <img src={pakistan} alt="pakFlag" className="pakFlag" />
          <div className="pakFlagCodeText">
            EN
            <RiArrowDownSFill
              style={{
                fontSize: "16px",
                marginTop: "1px",
                marginLeft: "-0.4px",
              }}
            />
          </div>

          <div className="signInText">
            <div className="signInTextTop">Hello, user</div>
            <div className="signInTextDown">Account & Lists</div>
          </div>

          <div className="ReturnsOrderText">
            <div className="ReturnsOrderTextTop">Returns</div>
            <div className="ReturnsOrderTextDown">& Orders</div>
          </div>

          <Link to={"/cart"} className="cartBox">
            <span className="cartitems">{cartitems.length}</span>
            <div className="cartDetails">
              <MdOutlineShoppingCart style={{ fontSize: "30px" }} />
              <span className="carttitle">Cart</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarBelt;
