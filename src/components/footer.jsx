import React from "react";
import { FaTwitterSquare, FaTelegram } from "react-icons/fa";
export const Footer = () => {
   return (
      <footer>
         <div className="container">
            <div className="row">
               <div className="col">
                  <a href="https://twitter.com/Dashfinance_?t=MNd8talx_Q4zs3TO4_RVcg&s=09">
                     <span>
                        <FaTwitterSquare />
                     </span>
                  </a>
                  <a href="https://t.me/dashfinancezk">
                     <span>
                        <FaTelegram />
                     </span>
                  </a>
               </div>
               <div className="col">
                  <span>© 2023 Dash Finance</span>
               </div>
            </div>
         </div>
      </footer>
   );
};
