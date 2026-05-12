import React from "react";
import "./homeBanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";

const HomeBanner = () => {
  return (
    <div className="relative w-full bg-gray-100 pb-10">
      {/* Hero Banner Image */}
      <div className="relative h-64 md:h-[80vh] overflow-hidden">
        <img
          className="w-full h-full object-cover md:object-fill"
          src="https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg"
          alt="Amazon Banner"
          style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </div>

      {/* Grid of Product Cards */}
      <div className="relative -mt-32 md:-mt-64 lg:-mt-80 z-20 px-4 md:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {homeBannerItemProduct.product.map((item, index) => {
            return (
              <div className="bg-white p-5 flex flex-col shadow-md rounded-sm" key={index}>
                <h2 className="text-xl font-bold mb-4">{item.itemTitle}</h2>

                <div className="grid grid-cols-2 gap-3 mb-4 flex-grow">
                  {item.imgs.map((img, imgIndex) => {
                    return (
                      <div className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity" key={imgIndex}>
                        <div className="h-24 md:h-32 bg-gray-50 flex items-center justify-center overflow-hidden rounded-sm">
                           <img src={img} alt="Product" className="object-contain w-full h-full" />
                        </div>
                        <span className="text-xs mt-1 text-gray-700 font-medium">Cleaning Tools</span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-sm text-cyan-700 font-semibold hover:text-orange-700 cursor-pointer hover:underline transition-all">
                  See More
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

