import React, { useState } from "react";
import "./homeDetail.css";
import homeProductData from "../../../homeProduct.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/actions";
import { MdStarRate, MdOutlineStarRate } from "react-icons/md";
import { toast } from "react-toastify";

// Deals for "Today's Deals"
const todaysDeals = Array(8).fill({
  img: "https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg",
  discount: "Up to 20% off",
  label: "Limited Time Deal",
  description: "iQOO Z9 5G | Starting @17999 Includ…",
});

// Deals for "Today's Offer"
const todaysOffers = Array(8).fill({
  img: "https://m.media-amazon.com/images/I/51WvUjDvIzL._AC_SY200_.jpg",
  discount: "Up to 30% off",
  label: "Hot Deal",
  description: "Smartwatch | Starting @1999 Includ…",
});

const DealSection = ({ title, data }) => {
  const [failedImages, setFailedImages] = useState(new Set());

  const handleImageError = (index) => {
    setFailedImages(new Set(failedImages).add(index));
  };

  return (
    <div className="bg-white m-4 p-4 shadow-sm rounded-sm overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-sm text-cyan-700 hover:text-orange-700 cursor-pointer hover:underline">See all deals</span>
      </div>

      <div className="flex overflow-x-auto no-scrollbar gap-4 pb-2">
        {data.map((deal, index) => (
          <div className="flex flex-col min-w-[160px] md:min-w-[200px] cursor-pointer hover:opacity-90 transition-opacity" key={index}>
            <div className="h-40 bg-gray-50 flex items-center justify-center p-2 rounded-sm overflow-hidden mb-2">
              {failedImages.has(index) ? (
                <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500">
                  Image unavailable
                </div>
              ) : (
                <img
                  src={deal.img}
                  alt="dealImg"
                  className="h-full object-contain"
                  onError={() => handleImageError(index)}
                />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="bg-red-700 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-sm">
                  {deal.discount}
                </span>
                <span className="text-red-700 text-[10px] md:text-xs font-bold uppercase tracking-tight">
                  {deal.label}
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-800 line-clamp-2 mt-1">
                {deal.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ItemsSection = ({ items }) => {
  const dispatch = useDispatch();
  const [failedImages, setFailedImages] = useState(new Set());

  const handleAddToCart = (item) => {
    toast.success("Added to cart!", { position: "bottom-right" });
    dispatch(addToCart(item));
  };

  const handleImageError = (id) => {
    setFailedImages(new Set(failedImages).add(id));
  };

  return (
    <div className="bg-white m-4 p-4 shadow-sm rounded-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Featured Items</h2>
        <span className="text-sm text-cyan-700 hover:text-orange-700 cursor-pointer hover:underline">View all</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow group">
            {/* Image Container */}
            <div className="relative h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
              {failedImages.has(item.id) ? (
                <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
                  Image unavailable
                </div>
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-300 max-w-full max-h-full"
                  onError={() => handleImageError(item.id)}
                  loading="lazy"
                />
              )}
              {item.badge && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.badge}
                </span>
              )}
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.discount} off
                </span>
              )}
            </div>

            {/* Content Container */}
            <div className="p-3 flex flex-col gap-2">
              <h3 className="text-sm font-medium line-clamp-2 hover:text-orange-600 cursor-pointer">
                {item.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-red-600">₹{item.price.toLocaleString()}</span>
                {item.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">₹{item.originalPrice.toLocaleString()}</span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {Array(5).fill().map((_, i) => (
                    i < Math.floor(item.rating) ? (
                      <MdStarRate key={i} size={16} className="text-yellow-500" />
                    ) : (
                      <MdOutlineStarRate key={i} size={16} className="text-gray-300" />
                    )
                  ))}
                </div>
                <span className="text-xs text-gray-600">({item.reviews})</span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full bg-amazon_yellow hover:bg-yellow-500 text-black font-semibold py-2 rounded-sm text-sm transition-colors mt-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeDetail = () => {
  const items = homeProductData.items || [];

  return (
    <div className="max-w-screen-2xl mx-auto">
      <DealSection title="Today's Deals" data={todaysDeals} />
      <ItemsSection items={items} />
      <DealSection title="Today's Offer" data={todaysOffers} />
    </div>
  );
};

export default HomeDetail;
