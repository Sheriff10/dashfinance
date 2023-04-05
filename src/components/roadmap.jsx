import React from "react";
import { FaDiceOne, FaDiceThree, FaDiceTwo } from "react-icons/fa";

export const Roadmap = () => {
   return (
      <div className="partner roadmap" id="roadmap">
         <div className="container">
            <div className="p-head text-center text-light p-5">
               <h1>ROADMAP</h1>
            </div>
            <div className="row">
               <div className="col-12 p-card">
                  <div className="row align-items-center p-2">
                     <div className="col-lg-4 col-md-6 rr text-center">
                        <div className="p-wrapper">
                           <div className="p-card-head">
                              <div className="r h3">
                                 <span className="p-2"> PHASE </span>
                                 <i>
                                    <FaDiceOne />
                                 </i>{" "}
                                 <br />
                              </div>
                           </div>
                           <div className="p-card-body">
                              <ul>
                                 <li>Community onboarding </li>
                                 <li>Introductory to dash finance</li>
                                 <li>Whitepaper release</li>
                                 <li>website launch</li>
                                 <li>Roadmap release</li>
                                 <li>community outreach </li>
                                 <li>Token launch</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 rr text-center">
                        <div className="p-wrapper">
                           <div className="p-card-head">
                              <div className="r h3">
                                 <span className="p-2"> PHASE </span>
                                 <i>
                                    <FaDiceTwo />
                                 </i>{" "}
                                 <br />
                              </div>
                           </div>
                           <div className="p-card-body">
                              <ul>
                                 <li>Dex testnet(Dashswap) </li>
                                 <li>Dex mainnet(Dashswap)</li>
                                 <li>strategic partnerships</li>
                                 <li>cmc and coin gekco listing</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 rr text-center">
                        <div className="p-wrapper">
                           <div className="p-card-head">
                              <div className="r h3">
                                 <span className="p-2"> PHASE </span>
                                 <i>
                                    <FaDiceThree />
                                 </i>{" "}
                                 <br />
                              </div>
                           </div>
                           <div className="p-card-body">
                              <ul>
                                 <li>Launchpad and incubator launch(Dashpad)</li>
                                 <li>onboarding first project to launch on (Dashpad)</li>
                                 <li>Community outreach</li>
                                 <li>AMA with community</li>
                                 <li>CEX listing </li>
                                 <li>Cross chain integrations</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
