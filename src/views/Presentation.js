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
import React , { useState, useEffect }from "react";

import {
  Button, Modal, ModalBody,
  
} from "reactstrap";
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import Testimonials from "./SectionsSections/Testimonials.js";

import Accordion from "./SectionsSections/Accordion.js";
import ContactUs from "./examples/ContactUs.js";
import LandingPage from "./examples/LandingPage.js";
import Headers from "./SectionsSections/Headers.js";
import { InlineWidget ,PopupWidget} from 'react-calendly';

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
  const [isMobile, setIsMobile] = useState(window.innerWidth );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth );
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(()=>{
  console.log('isMMobile',isMobile)
  },[isMobile])
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  useEffect(()=>{
console.log('isOpen',isOpen)
  },[isOpen])
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
  { isMobile>570 ?    <iframe
                   style={{width:"550px",borderRadius:"5px",height:"100%"}}
    // style="width:100%; height:100%; border-radius:5px;"
    src="https://www.youtube.com/embed/jN2y-7ne9CA"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
:
<iframe
style={{width:"380px",borderRadius:"5px",height:"100%"}}
// style="width:100%; height:100%; border-radius:5px;"
src="https://www.youtube.com/embed/jN2y-7ne9CA"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>
}

    </div>
{/* <ReactPlayer style={{width:"60%",borderRadius:"5px",height:"100%"}} url='https://vimeo.com/911867955?share=copy' /> */}
        </div>
      

        <div className="d-flex justify-content-center align-items-center w-100">
        <button
                    block
                    className="btn-round w-50 background-color-btn mt-3"
                   style={{
                    backgroundColor:"#1d8cf8 ",
                    border:"2px transparent",
                    color:"white",
                    height:"35px"
                   }}
              
                    onClick={()=>setIsOpen(true)}
                    
                  >
                   BOOK A CALL
                  </button>
        </div>
                 
               
      {isOpen && (
       <Modal style={{backgroundColor:"white",height:"300px"}} isOpen={isOpen} toggle={()=>setIsOpen(!isOpen)}>
                    
                    <InlineWidget style={{maxHeight:"90%"}} url="https://calendly.com/azizsaighi0/onboarding" />
                  
       </Modal>
      )}
         <LandingPage/>
        <div className="space-110" />
        <Headers />
       
        <Testimonials />
        <div className="space-110" />
        <ContactUs />
    
        <div className="space-110" />
        <Accordion />

      </div>
    </>
  );
}
