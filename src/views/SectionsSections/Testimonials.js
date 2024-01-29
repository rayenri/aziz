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
// ReactJS plugin for a nice carousel
import Slick from "react-slick";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

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



export default function Testimonials() {
  const [carousel1Index, setCarousel1Index] = React.useState(0);
  const [carousel2Index, setCarousel2Index] = React.useState(0);
  const [animating1, setAnimating1] = React.useState(false);
  const [animating2, setAnimating2] = React.useState(false);
  const onExiting = (carousel) => {
    if (carousel === 1) {
      setAnimating1(true);
    } else {
      setAnimating2(true);
    }
  };

 

  return (
    <>
      <div className="cd-section" id="testimonials">
       
      <div className="testimonials-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">What Clients Say </h2>
              </Col>
            </Row>
              <Row >
               <div className="w-100 d-flex justify-content-between" style={{height:"270px",padding:"20px", border: "2px solid rgba(27,127,204,.8)"}}>
               <Col className="ml-auto mr-auto text-center " md="1">
                <div className="d-flex justify-content-center align-items-center">
                <h2 className="title">Souad  </h2>
                <img src={require("assets/img/BA/deutsh.png")} alt="Drapeau" style={{ width: '25px', height: '20px', marginLeft: '5px' }} />
            </div>
             </Col>
              <Col className="ml-auto mr-auto text-center" md="5">
                <h2 className="title">What Client Say ? </h2>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6">
              <iframe
               style={{width:"100%",borderRadius:"5px",height:"100%"}}
    // style="width:100%; height:100%; border-radius:5px;"
    src="https://www.youtube.com/embed/uhGHRUR1VK4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
              </Col>
              </div>
              <div className="w-100 d-flex justify-content-between mt-3" style={{height:"270px",padding:"20px", border: "2px solid rgba(27,127,204,.8)"}}>
              <Col className="ml-auto mr-auto text-center" md="1">
              <div className="d-flex justify-content-center align-items-center">
                <h2 className="title">Ahmed  </h2>
                <img src={require("assets/img/BA/france.png")} alt="Drapeau" style={{ width: '25px', height: '20px', marginLeft: '5px' }} />
            </div>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="5">
                <h2 className="title">What Client Say ? </h2>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6">
              <iframe
               style={{width:"100%",borderRadius:"5px",height:"100%"}}
    // style="width:100%; height:100%; border-radius:5px;"
    src="https://youtube.com/embed/l9ARYpmOPWw"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
              </Col>
              </div>
              <div className="w-100 d-flex justify-content-between mt-3" style={{height:"270px",padding:"20px", border: "2px solid rgba(27,127,204,.8)"}}>
              <Col className="ml-auto mr-auto text-center" md="1">
                <h2 className="title">Refk  </h2>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="5">
                <h2 className="title">What Client Say ?</h2>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6">
              <iframe
               style={{width:"100%",borderRadius:"5px",height:"100%"}}
    // style="width:100%; height:100%; border-radius:5px;"
    src="https://www.youtube.com/embed/tFrYzWqbfeE"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
              </Col>
              </div>
              <div className="w-100 d-flex justify-content-between mt-3" style={{height:"270px",padding:"20px", border: "2px solid rgba(27,127,204,.8)"}}>
              <Col className="ml-auto mr-auto text-center" md="1">
              <div className="d-flex justify-content-center align-items-center">
                <h2 className="title">Amine  </h2>
                <img src={require("assets/img/BA/usa.png")} alt="Drapeau" style={{ width: '25px', height: '20px', marginLeft: '5px' }} />
             </div>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="5">
                <h2 className="title">What Client Say ?</h2>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6">
              <iframe
               style={{width:"100%",borderRadius:"5px",height:"100%"}}
    // style="width:100%; height:100%; border-radius:5px;"
    src="https://www.youtube.com/embed/OKhwah3ciQo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
              </Col>
              </div>
              </Row>

             
          </Container>

     
        </div>
   
      </div>
    </>
  );
}
