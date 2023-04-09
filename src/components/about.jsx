import React from "react";
import { FaCircle } from "react-icons/fa";

export const About = () => {
   return (
      <div className="about" id="abt">
         <div className="container">
            <div className="row c">
               <div className="col-lg-6 col-sm-12 col-md-12">
                  <div className="about-text">
                     <div className="head">
                        <h1>Unlocking DeFi's Potential Together!</h1>
                     </div>
                     <div className="a-body">
                        <ul>
                           <div className="col">
                              <li>
                                 {" "}
                                 <i>
                                    <FaCircle />
                                 </i>{" "}
                                 Trade
                              </li>
                           </div>
                           <div className="col">
                              <li>
                                 {" "}
                                 <i>
                                    <FaCircle />
                                 </i>{" "}
                                 Earn
                              </li>
                           </div>
                           <div className="col">
                              <li>
                                 {" "}
                                 <i>
                                    <FaCircle />
                                 </i>{" "}
                                 Explore
                              </li>
                           </div>
                        </ul>
                        <div className="container">
                           <div className="row btn-con">
                              <a href="./dashfinance_whitepaper.pdf" download>
                                 <div className=" btn btn-success col-sm-8 col-md- col-lg-4 abt-btn">
                                    {" "}
                                    Whitepaper
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-sm-12 col-md-12">
                  <div className="about-img">
                     {/* <img
                        src="dash.png"
                        alt="global tenchnology"
                        className="img-fluid"
                     /> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
