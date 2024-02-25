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
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import { FaCircleCheck } from "react-icons/fa6";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import { chartExample1 } from "variables/charts.js";

export default function LandingPage() {

  return (
    <>
    
     
      <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5" className="mt-5">
                <img
                  alt="..."
                  className="img-fluids floating"
                //  style={{height:"700px"}}
                  src={require("assets/img/BA/azizmain.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                      
                        <p className="card-category text-white font-weight-bolder">
                        Workouts
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                      
                        <p className="card-category text-white font-weight-bolder">
                        Mindset 
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                       
                        <p className="card-category text-white font-weight-bolder">Nutrition</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                
                  <h3 className="font-weight-bolder mt-3 text-center">WHO IS THIS FOR?</h3>
                  <div className="card shadow"> {/* Adding shadow class */}
        <div className="card-body d-flex justify-content-center align-items-center">
        <i class="fas fa-check mr-2" style={{color:"white"}}></i>
                  <h4>
                     	If you want to lose body fat, 
                  you tried various methods in the past, you managed to lose some weight, 
                  but you gained it all back, and now you’re looking for a system that you enjoy and can stick 
                  to lose those extra pounds once and for all
                  </h4>
                  </div> </div>
                  <div className="card shadow"> {/* Adding shadow class */}
        <div className="card-body d-flex justify-content-center align-items-center">   
        <i class="fas fa-check mr-2" style={{color:"white"}}></i>
                  <h4>
                  	If you’ve been training for a good period but you can’t see the progress that you wish for. 
                  You find yourself doing what other 95% for gym goers do, 
                  and results are way less than you expected... 
                  </h4>  </div> </div>
                  <div className="card shadow"> {/* Adding shadow class */}
        <div className="card-body d-flex justify-content-center align-items-center">
        <i class="fas fa-check mr-2" style={{color:"white"}}></i>
                  <h4>
                  	You managed to lose some weight but you’re now skinny fat? No problem, you’ll be gaining strength and size week by week and losing that body fat at the same time! Happy days. 
                  </h4>  </div> </div>
                  <div className="card shadow"> {/* Adding shadow class */}
        <div className="card-body d-flex justify-content-center align-items-center">
        <i class="fas fa-check mr-2" style={{color:"white"}}></i>
                  <h4>
                  Injuries, pains and discomforts are what’s keeping you away from your gaols, and the body that you always dreamed about? Together we will get rid of those and simultaneously start building muscle and working towards your dream physique. 
                  </h4>  </div> </div>
                
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </>
  );
}
