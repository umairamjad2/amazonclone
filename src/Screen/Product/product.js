import React, { useState } from "react";
import "./product.css";
import { MdStarRate, MdOutlineStarRate, MdFilterList } from "react-icons/md";
import productDetail from "./product.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    toast.success("Successfully added to cart", { position: "bottom-right" });
    dispatch(addToCart(item));
  };

  const [ratingVisible, setRatingVisible] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categorySubItems = [
    "Computers", "MacBooks", "PC Components", "Monitors", "Keyboards", "Storage", "Networking"
  ];

  const options = [
    { name: "Mobiles" }, { name: "Laptops" }, { name: "TV" }, { name: "Audio" }, { name: "Cameras" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Sub-header Navigation */}
      <div className="bg-gray-100 border-b border-gray-300 py-2 px-4 flex items-center gap-4 overflow-x-auto no-scrollbar whitespace-nowrap text-sm font-medium">
        <div className="font-bold text-black border-r border-gray-400 pr-4">Electronics</div>
        {options.map((item) => (
          <div className="hover:text-orange-700 cursor-pointer" key={item.name}>
            {item.name}
          </div>
        ))}
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row p-4 gap-6">
        {/* Left Sidebar (Filters) */}
        <div className="md:w-64 flex-shrink-0">
          <div 
            className="flex items-center justify-between md:block mb-4 md:mb-0"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <h3 className="text-lg font-bold">Category</h3>
            <MdFilterList size={24} className="md:hidden cursor-pointer" />
          </div>

          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block mt-2`}>
            <div className="flex flex-col gap-2">
              {categorySubItems.map((item, index) => (
                <div key={index} className="text-sm text-gray-700 hover:text-orange-700 cursor-pointer hover:underline">
                  {item}
                </div>
              ))}
              
              <div 
                className="font-bold text-sm mt-4 mb-2 flex items-center justify-between cursor-pointer"
                onClick={() => setRatingVisible(!ratingVisible)}
              >
                Customer Review
                <span className="text-xs">{ratingVisible ? '▲' : '▼'}</span>
              </div>

              {ratingVisible && (
                <div className="flex flex-col gap-2">
                   {[4, 3, 2, 1].map((rating) => (
                     <div className="flex items-center gap-1 cursor-pointer hover:opacity-80" key={rating}>
                        {Array(5).fill().map((_, i) => (
                          <MdStarRate key={i} className={i < rating ? "text-amazon_yellow" : "text-gray-300"} size={18} />
                        ))}
                        <span className="text-xs text-gray-600">& Up</span>
                     </div>
                   ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Content (Product Grid) */}
        <div className="flex-grow">
          <div className="border-b border-gray-200 pb-2 mb-4 text-sm font-medium">
            <span className="text-gray-600">Showing {productDetail.product.length} results for </span>
            <span className="text-orange-700 font-bold">"Macbooks"</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productDetail.product.map((item) => (
              <div className="bg-white border border-gray-200 rounded-sm flex flex-col shadow-sm hover:shadow-lg transition-shadow overflow-hidden group" key={item.id}>
                {/* Product Image */}
                <div className="h-56 bg-gray-50 flex items-center justify-center p-4">
                  <img src={item.imageUrl} alt={item.name} className="h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-sm md:text-base font-medium line-clamp-2 hover:text-orange-700 cursor-pointer mb-1">
                    {item.name}
                  </h2>
                  
                  <div className="flex items-center gap-1 mb-2">
                    {Array(5).fill().map((_, i) => (
                      <MdStarRate key={i} className={i < 4 ? "text-amazon_yellow" : "text-gray-300"} size={16} />
                    ))}
                    <span className="text-xs text-cyan-700 ml-1">1,245</span>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-medium self-start mt-1">₹</span>
                      <span className="text-2xl font-bold">{item.price}</span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-1 italic">Save extra with No Cost EMI</p>
                    <p className="text-xs text-gray-800 font-medium mt-1">FREE delivery by Amazon</p>

                    <button 
                      className="w-full mt-4 bg-amazon_yellow hover:bg-orange-400 text-black py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
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

