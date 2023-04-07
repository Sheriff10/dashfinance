import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

export const Intro = () => {
   return (
      <div className="intro text-center">
         <div className="container">
            <div className="row c justify-content-center">
               <div className="col-lg-6 col-sm-12 col-md-8">
                  <Swiper
                     slidesPerView={1}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     modules={[Autoplay]}
                     className="mySwiper"
                  >
                     <SwiperSlide>
                        <div className="intro-data">
                           <div className="intro-data-head">
                              <h1>
                                 A Revolution in <br /> DEFI.
                              </h1>{" "}
                              <br />
                              <small>
                                 Building the best trading experience in DeFi.
                              </small>
                              <div className="btn-con">
                                 <div className="row justify-content-center">
                                    <div className="btn btn-success m-4 col-4">
                                       BUY
                                    </div>
                                    <div className="btn btn-outline-success m-4 col-4">
                                       CONTRACT
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="intro-data">
                           <div className="intro-data-head">
                              <h1>
                                 {" "}
                                 The Future of Decentralized <br /> Trading.
                              </h1>{" "}
                              <br />
                              <small>
                                 Trade, earn, launch projects, and explore NFTs
                                 with the seamless DEX built on zkSync network.
                              </small>
                              <div className="btn-con">
                                 <div className="row justify-content-center">
                                    <div className="btn btn-success m-4 col-4">
                                       LAUNCHPAD
                                    </div>
                                    <div className="btn btn-outline-success m-4 col-4">
                                       DEX
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   );
};
