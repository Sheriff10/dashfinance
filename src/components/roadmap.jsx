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
                                 <li>Cross Chain Integrations</li>
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
                                 <li>
                                    Launchpad and incubator launch(Dashpad)
                                 </li>
                                 <li>
                                    onboarding first project to launch on
                                    (Dashpad)
                                 </li>
                                 <li>Community outreach</li>
                                 <li>AMA with community</li>
                                 <li>CEX listing </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="p-head text-center text-light p-5">
               <h3>Roadmap Phases Analysis</h3>
            </div>
            <div class="accordion" id="accordionExample">
               <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                     <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                     >
                        <b>PHASE 1</b>
                     </button>
                  </h2>
                  <div
                     id="collapseOne"
                     class="accordion-collapse collapse show"
                     aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample"
                  >
                     <div class="accordion-body">
                        The roadmap for Dash Finance outlines the steps they
                        will take to achieve their goals. The first part of the
                        roadmap focuses on introducing Dash Finance to the
                        community, building a website, releasing a whitepaper,
                        and onboarding new members to the community. They will
                        also engage with the community through outreach and
                        events.
                     </div>
                  </div>
               </div>
               <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                     <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                     >
                        <b>PHASE 2</b>
                     </button>
                  </h2>
                  <div
                     id="collapseTwo"
                     class="accordion-collapse collapse"
                     aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample"
                  >
                     <div class="accordion-body">
                        The second part of the roadmap outlines the development
                        of a decentralized exchange (Dex) called Dashswap. They
                        will first launch a testnet to test the platform and
                        then move to the mainnet. Dash Finance will also
                        establish strategic partnerships and cross-chain
                        integrations to expand the reach of the Dex.
                     </div>
                  </div>
               </div>
               <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                     <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                     >
                        <b>PHASE 3</b>
                     </button>
                  </h2>
                  <div
                     id="collapseThree"
                     class="accordion-collapse collapse"
                     aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample"
                  >
                     <div class="accordion-body">
                        Finally, Dashpad will be launched, which is a launchpad
                        and incubator platform. The first project will be
                        onboarded to the platform, followed by an AMA with the
                        community. They will also list on a centralized exchange
                        (CEX) to increase liquidity.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
