import React, { useState } from "react";
import "./product.css";
import { MdStarRate, MdOutlineStarRate } from "react-icons/md";
import productDetail from "./product.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";    without this line, toast will not work properly

const Product = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.items);
  const handleAddToCart = (item) => {
    toast.success("Successfully added to cart", { position: "bottom-right" });
    dispatch(addToCart(item));
  };

  const [ratingVisible, setRatingVisible] = useState(false);
  const handleReactions = () => {
    setRatingVisible(!ratingVisible);
  };

  const categorySubItems = [
    "Computers & Accessories",
    "MacBooks",
    "PC Components",
    "Monitors",
    "Keyboards & Mice",
    "Storage Devices",
    "Networking Devices",
    "Printers & Scanners",
    "Software",
    "Amazon Prime Eligible",
    "Average Customer Review",
    "Brands",
    "Price Range",
    "Best Sellers",
    "Deals & Discounts",
  ];
  const options = [
    //     { name: "Electronics" },
    { name: "Mobiles & Accessories" },
    { name: "Laptops & Accessories" },
    { name: "TV & Home Entertainment" },
    { name: "Audio" },
    { name: "Cameras" },
    { name: "Computer Peripherals" },
    { name: "Smart Technology" },
    { name: "Musical Instruments" },
  
  ];
  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productOptions  optionsSubMenu">Electronics</div>
        {options.map((item) => (
          <div className="optionsSubMenu" key={item.name}>
            {item.name}
          </div>
        ))}
      </div>
      <div className="productPageMain">
        <div className="productPageMainLeft">
          <div className="PageMainLeftTitle">Category</div>
          <div className="categoryContent">
            {categorySubItems.map((item, index) => (
              <div
                className="categoryItemSub"
                onClick={() => {
                  handleReactions();
                }}
              >
                {item}
              </div>
            ))}
            <div className="categoryItemSub" onClick={handleReactions}>
              Average Customer Review
            </div>

            {ratingVisible && (
              <>
                <div className="ratingLeftBox">
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <span>& Up</span>
                </div>
                <div className="ratingLeftBox">
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <span>& Up</span>
                </div>
                <div className="ratingLeftBox">
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <span>& Up</span>
                </div>
                <div className="ratingLeftBox">
                  <MdStarRate style={{ fontSize: "20px", color: "#febd69" }} />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <MdOutlineStarRate
                    style={{ fontSize: "20px", color: "#febd69" }}
                  />
                  <span>& Up</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="productPageMainRight">
          <div className="pageMainRightTopBanner">
            1-5 5 results for <span>Macbooks</span>
          </div>
          <div className="itemImageContainer">
            {productDetail.product.map((item) => (
              <div className="itemImageBox" key={item.id}>
                <div className="itemImage">
                  <img src={item.imageUrl} alt="itemImg" />
                </div>
                <div className="productDetails">
                  <div className="productName">
                    <div>{item.name}</div>
                  </div>
                  <div className="productRating">
                    <MdStarRate
                      style={{ fontSize: "20px", color: "#febd69" }}
                    />
                    <MdStarRate
                      style={{ fontSize: "20px", color: "#febd69" }}
                    />
                    <MdStarRate
                      style={{ fontSize: "20px", color: "#febd69" }}
                    />
                    <MdStarRate
                      style={{ fontSize: "20px", color: "#febd69" }}
                    />
                    <MdOutlineStarRate
                      style={{ fontSize: "20px", color: "#febd69" }}
                    />
                  </div>
                  <div className="productPrice">
                    <div className="productPriceBox">
                      <span className="productPriceValue">₹ {item.price}</span>
                      <span
                        className="productPriceBtn"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </span>
                    </div>
                    <div className="productDiscount">
                      Upto 10% Off on selected Cards
                    </div>
                    <div className="productDelivery">
                      Free Delivery by Amazon
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
