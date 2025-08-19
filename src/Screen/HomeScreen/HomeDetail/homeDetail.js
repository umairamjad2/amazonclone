

import React from "react";
import "./homeDetail.css";

// Deals for "Today's Deals"
const todaysDeals = Array(8).fill({
  img: "https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg",
  discount: "Up to 20% off",
  label: "Limited Time Deal",
  description: "iQOO Z9 5G | Starting @17999 Includ…",
});

// Deals for "Today's Offer"
const todaysOffers = Array(8).fill({
  img: "https://th.bing.com/th/id/OIP.xEZaA7smVXY-OhN64Zjy9QHaIZ?w=170&h=193&c=7&r=0&o=7&pid=1.7&rm=3",
  discount: "Up to 30% off",
  label: "Hot Deal",
  description: "Smartwatch | Starting @1999 Includ…",
});

const DealSection = ({ title, data }) => {
  return (
    <div className="dealContainer">
      <h2 className="dealHeading">{title}</h2>
      <div className="deatilBox">
        <div className="dealScrollContainer">
          {data.map((deal, index) => (
            <div className="dealBox" key={index}>
              <img src={deal.img} alt="dealImg" />
              <div className="imgDetailContainer">
                <div className="imgTopDetail">
                  <div className="PercentageOff">{deal.discount}</div>
                  <div className="limitedTimeDeal">{deal.label}</div>
                </div>
                <div className="imgBottomDetail">{deal.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomeDetail = () => {
  return (
    <div className="homeDetails">
      <DealSection title="Today's Deals" data={todaysDeals} />
      <DealSection title="Today's Offer" data={todaysOffers} />
    </div>
  );
};

export default HomeDetail;




// import React from "react";
// import "./homeDetail.css";

// const HomeDetail = () => {

//   return (
//     <div className="homeDetails">
//       <div className="dealContainer">
//         <h2 className="dealHeading">Today's Deals</h2>
//         <div className="deatilBox">
//           <div className="dealScrollContainer">
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="dealContainer">
//         <h2 className="dealHeading">Today's Offer</h2>
//         <div className="deatilBox">
//           <div className="dealScrollContainer">

//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>

//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//             <div className="dealBox">
//               <img
//                 src="https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
//                 alt="dealImg"
//               />
//               <div className="imgDetailContainer">
//                 <div className="imgTopDetail">
//                   <div className="PercentageOff">Up to 20% off</div>
//                   <div className="limitedTimeDeal">Limited Time Deal</div>
//                 </div>

//                 <div className="imgBottomDetail">
//                   iQOO Z9 5G | Starting @17999 Includ…
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeDetail;