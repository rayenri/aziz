/*!

=========================================================
* BLK Design System PRO React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import Testimonials from "./SectionsSections/Testimonials.js";

import Accordion from "./SectionsSections/Accordion.js";
import ContactUs from "./examples/ContactUs.js";
import LandingPage from "./examples/LandingPage.js";
import Headers from "./SectionsSections/Headers.js";


export default function Presentation() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("presentation-page");
    return function cleanup() {
      document.body.classList.remove("presentation-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      
      <div className="wrapper" ref={wrapper}>
      <div className="space-110" />

      <div className="d-flex justify-content-center align-items-center " style={{height:"300px"}}>
        {/* <video
        style={{width:"60%",borderRadius:"5px"}}
       controls
    >
<source src={require("assets/video/VSL.mp4")} type="video/mp4" />
    </video>  */}
    <iframe
    style={{width:"60%",borderRadius:"5px",height:"100%"}}
    src="https://drive.google.com/file/d/1ANwo0-hSOlUiGcc3tBoMnDHGbOdNklpo/preview"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
</iframe>
        </div>
      
        
         <LandingPage/>
        <div className="space-110" />
        <Headers />
       
        <Testimonials />
        <div className="space-110" />
        <Accordion />
        <div className="space-110" />
        <ContactUs />

       
      </div>
    </>
  );
}
