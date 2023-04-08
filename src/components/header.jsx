import React from "react";

export const Header = () => {
   const toggleMenu = () => {
      const menu = document.querySelector(".menu-btn .menu-btn-burger");
      const slide = document.querySelector(".links");
      if (menu) menu.classList.toggle("open");
      if (slide) slide.classList.toggle("open");
   };
   return (
      <header>
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-sm-12 col-md-12">
                  <div className="sm-nav">
                     <div className="logo">
                        <img src="l2.png" alt="dashfinance" className="img-fluid" />
                        <span className="h4 p-2">DASHFINANCE</span>
                     </div>
                     <div className="menu-btn" onClick={toggleMenu}>
                        <div className="menu-btn-burger"></div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-sm-6">
                  <div className="links">
                     <ul>
                        <li><a href="#" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#abt" onClick={toggleMenu}>About</a></li>
                        <li><a href="#tk" onClick={toggleMenu}>Tokenomics</a></li>
                        <li><a href="#roadmap" onClick={toggleMenu}>Roadmap</a></li>
                        <li><a href="#pt" onClick={toggleMenu}>Partnerships</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col">
                  <div className="btn-con">
                     <a className="btn btn-outline-success">Launch App</a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};
