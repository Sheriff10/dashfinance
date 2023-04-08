import React from "react";
import {
   FaRecycle,
   FaPercentage,
   FaUsers,
   FaSuitcase,
   FaParachuteBox,
   FaMoneyBill,
   FaHandshake,
   FaChartBar,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination, Autoplay } from "swiper";

export const Tokenomincs = () => {
   const tkFunc = (icon, title, percent) => {
      return { icon, title, percent };
   };
   const tkArr = [
      tkFunc(<FaRecycle />, "Total Supply", "150M"),
      tkFunc(<FaPercentage />, "Staking and LP Rewards", "5%"),
      tkFunc(<FaUsers />, "Team", "5%"),
      tkFunc(<FaHandshake />, "Future Partnerships", "15%"),
      tkFunc(<FaChartBar />, "Future Fundraising", "5%"),
      tkFunc(<FaSuitcase />, "Marketing", "4%"),
      tkFunc(<FaParachuteBox />, "Future Airdrop and Giveaways", "1%"),
      tkFunc(<FaMoneyBill />, "Liquidity", "45%"),
   ];
   return (
      <div className="partner" id="tk">
         <div className="container">
            <div className="p-head text-center text-light p-5">
               <h1>TOKENOMICS</h1>
            </div>
            <div className="row">
               <div className="col-12 p-card">
                  <div className="row align-items-center p-2">
                     <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        pagination={{
                           clickable: true,
                        }}
                        autoplay={{
                           delay: 2500,
                           disableOnInteraction: false,
                        }}
                        breakpoints={{
                           960: {
                              slidesPerView: 3,
                              spaceBetween: 8,
                           },
                           720: {
                              slidesPerView: 3,
                              spaceBetween: 6,
                           },
                           540: {
                              slidesPerView: 2,
                              spaceBetween: 4,
                           },
                           320: {
                              slidesPerView: 1,
                              spaceBetween: 2,
                           },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                     >
                        {tkArr.map((i, index) => (
                           <SwiperSlide key={index}>
                              <div className="col-12 text-center">
                                 <div className="p-wrapper">
                                    <div className="p-card-head">
                                       <div>
                                          <i>{i.icon}</i> <br />
                                       </div>
                                    </div>
                                    <div className="p-card-body">
                                       <span>{i.title}</span>
                                       <h1>
                                          <b>{i.percent}</b>
                                       </h1>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
