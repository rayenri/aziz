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
// nodejs library that concatenates classes
import classnames from "classnames";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
let slickHeader2Settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  className: "customer-logos",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// custom previous button for the slick component
const PrevButton = (props) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = (props) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickHeader3Settings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider slick-buttons-under",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
};

export default function Headers() {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="cd-section" id="headers">
 
        <div className="header header-3">
        
          <div className="page-header header-filter">
            <div className="content-center">
              <Row>
                <Col
                  className="ml-auto mr-auto positioned"
                  lg="5"
                  md="8"
                  xs="12"
                >
                  <h1 className="title">Real People Real Tranformations</h1>
                  {/* <p className="description">
                    Meet Wingman, a robust suite of styled pages and components,
                    powered by Bootstrap 4. The ideal starting point for product
                    landing pages, stylish web-apps and complete company
                    websites.
                  </p> */}
                  {/* <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Purchase Now
                  </Button> */}
                </Col>
                <Col md="12">
                  <Slick {...slickHeader3Settings}>
                    <div>
                      <img
                        alt="..."
                        style={{aspectRatio:"16/9"}}
                        src={require("assets/img/BA/1AZIZ.jpg")}
                       
                      />
                    </div>
                    <div>
                      <img
                        alt="..."
                        style={{aspectRatio:"16/9"}}
                        src={require("assets/img/BA/2AZIZ.jpg")}
                       
                      />
                    </div>
                    <div>
                      <img
                        alt="..."
                        style={{aspectRatio:"16/9"}}
                        src={require("assets/img/BA/3AZIZ.jpg")}
                       
                      />
                    </div>
                    <div>
                      <img
                        alt="..."
                        style={{aspectRatio:"16/9"}}
                        src={require("assets/img/BA/4AZIZ.jpg")}
                       
                      />
                    </div>
                    <div>
                      <img
                        alt="..."
                        style={{aspectRatio:"16/9"}}
                        src={require("assets/img/BA/5AZIZ.jpg")}
                      
                      />
                    </div>
                    <div>
                      <img
                        alt="..."
                        style={{aspectRatio:"16/9"}}
                        src={require("assets/img/BA/6AZIZ.jpg")}
                       
                      />
                    </div>
                    <div>
                      <img
                        alt="..."
                        style={{aspectRatio:"16/9"}}
                        src={require("assets/img/BA/7AZIZ.jpg")}
                       
                      />
                    </div>
                    <div>
                      <img
                        alt="..."
                        style={{aspectRatio:"16/9"}}
                        src={require("assets/img/BA/8AZIZ.jpg")}
                      
                      />
                    </div>
                    <div>
                      <img
                        alt="..."
                        style={{aspectRatio:"16/9"}}
                        src={require("assets/img/BA/9AZIZ.jpg")}
                       
                      />
                    </div>
                  </Slick>
                </Col>
              </Row>
            </div>
          </div>
        </div>
     
      </div>{" "}
    </>
  );
}
