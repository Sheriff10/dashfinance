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
                        <h1>Lending and Borrowing Protocol</h1>
                     </div>
                     <div className="a-body">
                        <ul>
                           <li>
                              {" "}
                              <i>
                                 <FaCircle />
                              </i>{" "}
                              Collateralize GMX and GLP
                           </li>
                           <li>
                              {" "}
                              <i>
                                 <FaCircle />
                              </i>{" "}
                              Collateralize GMX and GLP
                           </li>
                           <li>
                              {" "}
                              <i>
                                 <FaCircle />
                              </i>{" "}
                              Collateralize GMX and GLP
                           </li>
                        </ul>
                        <div className="container">
                           <div className="row btn-con">
                              <div className=" btn btn-success col-sm-8 col-md- col-lg-4 abt-btn">
                                 Launch App
                              </div>
                              <div className=" btn btn-outline-success col-sm-8 col-md- col-lg-4 abt-btn">
                                 Launch App
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-sm-12 col-md-12">
                  <div className="about-img">
                     <img
                        src="dash.png"
                        alt="global tenchnology"
                        className="img-fluid"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
