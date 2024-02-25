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
import { Link, useNavigate } from "react-router-dom";
// reactstrap components
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
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function ColorNavbar({onResultsClick,onTestimonialsClick}) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const navigate=useNavigate()
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
  console.log("aaa",{ onResultsClick, onTestimonialsClick });
 const navigateTestimonials=()=>{
  if(onTestimonialsClick) { // Check if the function is provided
    onTestimonialsClick();
  } else {
    console.error('onTestimonialsClick is not a function');
  }
 }
  return (
    <>
      <Navbar className={"d-block fixed-top " + navbarColor} expand="lg" >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
              
              <span> SAIGHI AZIZ  •</span> PERSONAL TRAINING
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
            <span style={{cursor: 'pointer'}} onClick={onResultsClick}>RESULTS</span>
            </NavItem>
            <NavItem className="nav-link mt-2" onClick={navigateTestimonials}>
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
    </>
  );
}
