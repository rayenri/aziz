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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Accordion() {
  const [collapse, setCollapse] = React.useState(1);
  const openCollapse = (collapse) => {
    setCollapse(collapse);
  };

  return (
    <>
      <div className="cd-section" id="accordion">
        {/* ********* Accordion 1 ********* */}
        <div className="accordion-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title ">FAQ'S</h2>
                <div className="section-space" />
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="12">
                <div className="accordion">
                <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left "
                          color="link"
                          aria-expanded={collapse === 1}
                          onClick={() => openCollapse(1)}
                        >
                          How much does it cost?{" "}
                          <i className="tim-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 1}>
                      <CardBody>
                      Online training costs <span style={{fontWeight:"900"}}>€ 79 </span> per month. It's a monthly recurring subscription service which you may cancel at ANY time, and still get your full month of service.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 2}
                          onClick={() => openCollapse(2)}
                        >
                          How does online training works? {" "}
                          <i className="tim-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 2}>
                      <CardBody>
                      First, we’ll have a Zoom call where we get to know each other, the goal is to know things about you, like your specific goals, your current level, your experience with the gym, your past injuries etc... with that your coach can write for you your tailored program.
Then, you’ll be given access to an app called TrueCoach, where you’ll find your personalized program. 
All the exercises are shown, and you are guided through them daily by your Coach. You do the exercises for the day, and you send in form videos to your Coach to review.  He will help you as needed. 
You have regular back and forth communication with your coach and he will answer any of your questions concerning training, diet, supplements, mindset etc... 

                      </CardBody>
                    </Collapse>
                  </Card>
                 
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left "
                          color="link"
                          aria-expanded={collapse === 3}
                          onClick={() => openCollapse(3)}
                        >
                          What types of payment do you take?{" "}
                          <i className="tim-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 3}>
                      <CardBody>
                      We accept international payments from credit/debit cards. If you live in Tunisia and don’t have an international payment method, please get in touch with us through Instagram.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 4}
                          onClick={() => openCollapse(4)}
                        >
                         Can I sign up for only one month? {" "}
                          <i className="tim-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 4}>
                      <CardBody>
                      Yes. You can sign up for one month and cancel, or you may find that you benefit so much from the training that you want to stay on for several months.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 5}
                          onClick={() => openCollapse(5)}
                        >
                          What is your cancellation policy ?{" "}
                          <i className="tim-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 5}>
                      <CardBody>
                      You may cancel at any time, for whatever reason. Regardless of when you cancel, you will still receive service for the entire month that you paid for.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 6}
                          onClick={() => openCollapse(6)}
                        >
                         What equipment do I need?{" "}
                          <i className="tim-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 6}>
                      <CardBody>
                      It’s good to have a gym membership, even better if the gym has a sled (you can look it up on google) but some of my clients prefer training at home, and they’re seeing amazing results. 
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">
                        <Button
                          className="w-100 text-left"
                          color="link"
                          aria-expanded={collapse === 7}
                          onClick={() => openCollapse(7)}
                        >
                         How fast will I see results? {" "}
                          <i className="tim-icons icon-minimal-down float-right" />
                        </Button>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapse === 7}>
                      <CardBody>
                      First, I must mention that the same way it took months if not years to ruin someone’s body, it also takes months to build it up again. Personally, it took me 4 years to get to my dream physique. Having said that my clients consistently see changes in their bodies on just the third week of the program. It’s so awesome. The real physical changes happen around the 8th week. This is where your friends will really start to notice. And by week 16 you will be blown away at the transformation you made. Of course, this only happens when you follow the program and are committed

                      </CardBody>
                    </Collapse>
                  </Card>
                
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END Accordion 1 ********* */}
      </div>
      <style>
        {`
       .accordion-1 .accordion{
        margin-top: 10px;
  margin-bottom: 10px;
       }
   
    
  `}
      </style>
    </>
  );
}
