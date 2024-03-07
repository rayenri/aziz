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
import React , { useState, useEffect ,useRef}from "react";

import { Link, useNavigate } from "react-router-dom";
import ColorNavbar from "components/Navbars/ColorNavbar.js";

import Testimonials from "./SectionsSections/Testimonials.js";

import Accordion from "./SectionsSections/Accordion.js";
import ContactUs from "./examples/ContactUs.js";
import LandingPage from "./examples/LandingPage.js";
import Headers from "./SectionsSections/Headers.js";
import { InlineWidget ,PopupWidget} from 'react-calendly';
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Modal,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
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


  const headersRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToRef = (ref) => {
    console.log('tefff',ref)
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  }
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");

  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };
  return (
    <>
        <Navbar className={"d-block fixed-top " + navbarColor} expand="lg" >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand  id="tooltip6619950104">
              
              <span> SAIGHI AZIZ •</span> PERSONAL TRAINING
            </NavbarBrand>
          
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                <span> SAIGHI AZIZ  </span>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
            <NavItem  className="nav-link mt-2"  >
            <span style={{cursor: 'pointer'}} onClick={() => scrollToRef(headersRef)}>RESULTS</span>
            </NavItem>
            <NavItem className="nav-link mt-2" onClick={()=>scrollToRef(testimonialsRef)}>
              <span style={{ cursor: 'pointer' }}>TESTIMONIALS</span>
            </NavItem>
              <NavItem>
                <Button
                  className="nav-link"
                  color="default"
                  href="https://calendly.com/azizsaighi0/onboarding"
                  size="sm"
                  target="_blank"
                >
                  <p>START NOW</p>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>


         
        </Container>
       
        {/* <div className=" d-flex justify-content-center  align-items-center">
            <h4 className="info-title">30 days money back guarantee</h4>
            </div> */}
          
      </Navbar>
      <div className="wrapper" ref={wrapper}>
      
      <div className="space-110" />
     
      <div className="p-3"  style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
<h2 className="title " style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>      Let me teach you the secrets of training and nutrition, to lose fat, build muscle, heal injuries and get into the best shape of your life
</h2>
</div>
      <div className="d-flex justify-content-center w-100 " style={{height:"300px",marginTop:"3%"}}>
      
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
src="https://www.youtube.com/embed/kr32wBG5s2A"

frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>
}

    </div>
{/* <ReactPlayer style={{width:"60%",borderRadius:"5px",height:"100%"}} url='https://vimeo.com/911867955?share=copy' /> */}
        </div>
      

        <div className="d-flex justify-content-center align-items-center w-100" style={{marginTop:"3%"}}>
        <button
                    block
                    className="btn-round w-50 background-color-btn mt-3"
                   style={{
                    backgroundColor:"#1d8cf8 ",
                    border:"2px transparent",
                    color:"white",
                    height:"35px"
                   }}
              
                  //  onClick={()=>setIsOpen(true)}
                    
                  >
                   BOOK A CALL
                  </button>
                  {/* <Button
                 block
                 className="btn-round w-50 background-color-btn mt-3"
                style={{
                 backgroundColor:"#1d8cf8 ",
                 border:"2px transparent",
                 color:"white",
                 height:"35px"
                }}
                  href="https://calendly.com/azizsaighi0/onboarding"
                  size="sm"
                  target="_blank"
                >
                  <p>START NOW</p>
                </Button> */}
        </div>
                 
               
      {isOpen && (
       <Modal style={{backgroundColor:"white",height:"300px"}} isOpen={isOpen} toggle={()=>setIsOpen(!isOpen)}>
                    
                    <InlineWidget style={{maxHeight:"90%"}} url="https://calendly.com/azizsaighi0/onboarding" />
                  
       </Modal>
      )}
         <LandingPage/>
        <div className="space-110" />
        
        <div ref={headersRef} ><Headers /></div>
      <div ref={testimonialsRef} ><Testimonials /></div>
        <div className="space-110" />
        <ContactUs />
    
        <div className="space-110" />
        <Accordion />

      </div>
    </>
  );
}
