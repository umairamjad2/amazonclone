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
    toast.error("Item removed from cart", { position: "bottom-right" });
    dispatch(removeFromCart(id));
  };

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is empty!", { position: "bottom-right" });
    } else {
      toast.info("Proceeding to checkout...", { position: "bottom-right" });
      // Logic for checkout can go here
    }
  };

  let totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Left Section: Cart Items */}
        <div className="flex-grow bg-white p-4 md:p-6 shadow-sm rounded-sm">
          <h1 className="text-2xl md:text-3xl font-bold border-b border-gray-200 pb-4 mb-4">
            Shopping Cart
          </h1>
          
          {cartItem.length === 0 ? (
            <div className="py-10 text-center">
              <h2 className="text-xl font-medium">Your Amazon Cart is empty.</h2>
              <p className="text-sm text-cyan-700 hover:underline cursor-pointer mt-2">Check your Saved for later items</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItem.map((item, index) => (
                <div className="flex flex-col sm:flex-row gap-4 border-b border-gray-100 pb-6 last:border-0" key={item.id + index}>
                  {/* Image */}
                  <div className="w-full sm:w-44 h-44 bg-gray-50 flex items-center justify-center rounded-sm overflow-hidden flex-shrink-0">
                    <img src={item.imageUrl} alt={item.name} className="h-full object-contain" />
                  </div>

                  {/* Details */}
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-start gap-4">
                       <h2 className="text-lg font-medium line-clamp-2 hover:text-orange-700 cursor-pointer">{item.name}</h2>
                       <span className="text-lg font-bold whitespace-nowrap">₹ {item.price}</span>
                    </div>
                    
                    <div className="text-green-700 text-xs font-bold mt-1">In stock</div>
                    <div className="text-gray-500 text-xs mt-1">Eligible for FREE Shipping</div>
                    
                    <div className="mt-2 h-5">
                      <img src={FulFilled} alt="Amazon Badge" className="h-full object-contain" />
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-xs font-medium text-cyan-700">
                      <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 px-2 py-1 gap-2 text-black">
                        <span>Qty: 1</span>
                      </div>
                      <span 
                        className="hover:underline cursor-pointer border-l border-gray-300 pl-4"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Delete
                      </span>
                      <span className="hover:underline cursor-pointer border-l border-gray-300 pl-4">Save for later</span>
                      <span className="hover:underline cursor-pointer border-l border-gray-300 pl-4 hidden md:inline">See more like this</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItem.length > 0 && (
             <div className="text-right mt-4 text-lg">
                Subtotal ({cartItem.length} items): <span className="font-bold font-mono">₹ {totalPrice}</span>
             </div>
          )}
        </div>

        {/* Right Section: Subtotal & Checkout */}
        <div className="lg:w-80 flex-shrink-0 flex flex-col gap-4">
           <div className="bg-white p-6 shadow-sm rounded-sm">
              <div className="flex items-center gap-2 text-green-700 text-sm mb-4">
                 <div className="w-5 h-5 bg-green-700 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                 <span>Your order is eligible for FREE Delivery.</span>
              </div>

              <div className="text-lg mb-4">
                Subtotal ({cartItem.length} items): <span className="font-bold">₹ {totalPrice}</span>
              </div>

              <div className="flex items-center gap-2 text-sm mb-6">
                <input type="checkbox" className="w-4 h-4 cursor-pointer" id="gift" />
                <label htmlFor="gift" className="cursor-pointer">This order contains a gift</label>
              </div>

              <button 
                className={`w-full py-2.5 rounded-full text-sm font-medium transition-all shadow-sm
                  ${cartItem.length === 0 
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                    : "bg-amazon_yellow hover:bg-orange-400 text-black border border-orange-300"
                  }`}
                onClick={handleBuyNow}
                disabled={cartItem.length === 0}
              >
                Proceed to Buy
              </button>
           </div>

           <div className="bg-white p-4 shadow-sm rounded-sm hidden lg:block">
              <h3 className="font-bold text-sm mb-2">Recently Viewed</h3>
              <p className="text-xs text-gray-500 italic">No recently viewed items.</p>
           </div>
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;

