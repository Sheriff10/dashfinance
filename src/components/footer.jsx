import React from "react";
import { FaTwitterSquare, FaTelegram } from "react-icons/fa";
export const Footer = () => {
   return (
      <footer>
         <div className="container">
            <div className="row">
               <div className="col">
                  <a href="https://twitter.com/dash_finance?s=21&t=XPxXw1bYBLxZJXEq0mYpTA">
                     <span>
                        <FaTwitterSquare />
                     </span>
                  </a>
                  <a href="https://t.me/dashfinanceportal">
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
