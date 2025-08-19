import React from "react";
import "./homeBanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";
const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img
        className="homeBannerimg"
        src="https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg"
      />
      <div className="grayBackgroundHomeBanner"></div>

      <div className="itemDiv">
        {homeBannerItemProduct.product.map((item, index) => {
          return (
            <div className="itemCard">
              <div className="cardTitle">{item.itemTitle}</div>

              <div className="imgCardContainer">
                {item.imgs.map((img, imgIndex) => {
                  return (
                    <div className="imgCard" key={imgIndex}>
                      <img src={img} alt="" />
                      <div className="imgCardname">Cleaning Tools</div>
                    </div>
                  );
                })}
              </div>

              <div className="seeMoreBanner">See More</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeBanner;
