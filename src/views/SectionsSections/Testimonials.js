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

// core components
const items1 = [
  {
    content: (
      <Container>
        <Row>
          <Col className="mr-auto" md="5">
            <div className="space-100" />
            <CardTitle tag="h3">Isaac Hunter</CardTitle>
            <h3 className="text-warning">• • •</h3>
            <h4 className="description">
              Take up one idea. Make that one idea your life - think of it,
              dream of it, live on that idea. Let the brain, muscles, nerves,
              every part of your body, be full of that idea, and just leave
              every other idea alone. This is the way to success. A single rose
              can be my garden... a single friend, my world.
            </h4>
            <Button
              color="warning"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Read more
            </Button>
          </Col>
          <Col className="ml-auto" md="6">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/lucy.jpg")}
            />
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <Container>
        <Row>
          <Col className="mr-auto" md="5">
            <div className="space-100" />
            <CardTitle tag="h3">Isaac Hunter</CardTitle>
            <h3 className="text-warning">• • •</h3>
            <h4 className="description">
              Take up one idea. Make that one idea your life - think of it,
              dream of it, live on that idea. Let the brain, muscles, nerves,
              every part of your body, be full of that idea, and just leave
              every other idea alone. This is the way to success. A single rose
              can be my garden... a single friend, my world.
            </h4>
            <Button
              color="warning"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Read more
            </Button>
          </Col>
          <Col className="ml-auto" md="6">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/tom-klein.jpg")}
            />
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1",
  },
];

const items2 = [
  {
    content: (
      <div className="info info-primary">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/michael.jpg")}
            />
          </a>
        </div>
        <h4 className="info-title">Best Quality</h4>
        <p className="description">
          Gain access to the demographics, psychographics, and location of
          unique people.
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <div className="info info-warning">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("assets/img/olivia.jpg")}
            />
          </a>
        </div>
        <h4 className="info-title">Best Quality</h4>
        <p className="description">
          Gain access to the demographics, psychographics, and location of
          unique people.
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "1",
  },
];

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

let slickSettings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider",
  slide: "section",
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

  const onExited = (carousel) => {
    if (carousel === 1) {
      setAnimating1(false);
    } else {
      setAnimating2(false);
    }
  };
  const next = (carousel, items) => {
    if (carousel === 1) {
      if (animating1) {
        return;
      }
    } else {
      if (animating2) {
        return;
      }
    }
    let currentIndex = -1;
    if (carousel === 1) {
      currentIndex = carousel1Index;
    } else {
      currentIndex = carousel2Index;
    }
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    if (carousel === 1) {
      setCarousel1Index(nextIndex);
    } else {
      setCarousel2Index(nextIndex);
    }
  };
  const previous = (carousel, items) => {
    if (carousel === 1) {
      if (animating1) {
        return;
      }
    } else {
      if (animating2) {
        return;
      }
    }
    let currentIndex = -1;
    if (carousel === 1) {
      currentIndex = carousel1Index;
    } else {
      currentIndex = carousel2Index;
    }
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    if (carousel === 1) {
      setCarousel1Index(nextIndex);
    } else {
      setCarousel2Index(nextIndex);
    }
  };
  const goToIndex = (newIndex, carousel) => {
    if (carousel === 1) {
      if (animating1) {
        return;
      }
    } else {
      if (animating2) {
        return;
      }
    }
    if (carousel === 1) {
      setCarousel1Index(newIndex);
    } else {
      setCarousel2Index(newIndex);
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
              <Col className="ml-auto mr-auto text-center" md="5">
                <h2 className="title">What Clients Say1 </h2>
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

              <Col className="ml-auto mr-auto text-center" md="5">
                <h2 className="title">What Clients Say2 </h2>
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

              <Col className="ml-auto mr-auto text-center" md="5">
                <h2 className="title">What Clients Say3 </h2>
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
              
              <Col className="ml-auto mr-auto text-center" md="5">
                <h2 className="title">What Clients Say4 </h2>
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
              </Row>

             
          </Container>

     
        </div>
   
      </div>
    </>
  );
}
