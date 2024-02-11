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
import ReactPlayer from 'react-player'
import "./vimeo.css"
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
      <div className="d-flex justify-content-center w-100 " style={{height:"300px"}}>
      
<div >
      {/* <iframe
        src="https://www.youtube.com/watch?v=jN2y-7ne9CA"
        frameBorder="0"
        allow="fullscreen"
        style={{width:"550px",borderRadius:"5px",height:"100%"}}
        title="VSL"
      /> */}
      <iframe
                   style={{width:"550px",borderRadius:"5px",height:"100%"}}
    // style="width:100%; height:100%; border-radius:5px;"
    src="https://www.youtube.com/embed/jN2y-7ne9CA"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
    </div>
{/* <ReactPlayer style={{width:"60%",borderRadius:"5px",height:"100%"}} url='https://vimeo.com/911867955?share=copy' /> */}
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
