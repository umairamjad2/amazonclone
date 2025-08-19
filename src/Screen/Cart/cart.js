import React, { useEffect, useState } from "react";
import "./cart.css";
import FulFilled from "../../assets/fulFilledAmazon.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    toast.error("Item remove from cart", { position: "bottom-right" });
    dispatch(removeFromCart(id));
  };
  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is empty!", { position: "bottom-right" });
    } else {
      toast.info("Proceeding to checkout...", { position: "bottom-right" });
      cartItems.forEach((item) => {
        dispatch(removeFromCart(item.id));
      });
    }
  };

  let totalPrice = 0;
  let cost = cartItems.map((item) => {
    return (totalPrice += item.price);
  });

  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="desellectAllCart">Deselect all items</div>
        <div className="cartPriceTextDivider">Price</div>
        <div className="cartItemContainer">
          {cartItem.map((item, index) => {
            return (
              <div className="cartItemBlock">
                <div className="cartItemLeftBlock">
                  <div className="leftImageBox">
                    <img src={item.imageUrl} alt="cartImage" />
                  </div>
                  <div className="leftItemDetails">
                    <div className="productName">{item.name}</div>
                    <div className="inStockCart">In stock</div>
                    <div className="elligiblStatus">
                      Elligible for Free Shopping
                    </div>
                    <div className="amazonFilledImage">
                      <img src={FulFilled} alt="Amazon Badge" />
                    </div>
                    <div
                      className="removeCartBtn"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove From Basket
                    </div>
                  </div>
                </div>
                <div className="cartItemRightBlock">Rs {item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({cartItem.length} items) :
          <span className="subTotalPrice"> Rs {totalPrice}</span>
        </div>
        <div className="giftAddto">
          <input type="checkbox" />
          <div>This Order Contains a gift</div>
        </div>
        <div
          className={`proceedToBuy ${cartItems.length === 0 ? "disabled" : ""}`}
          onClick={() => {
            handleBuyNow();
          }}
        >
          Proceed To Buy
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
