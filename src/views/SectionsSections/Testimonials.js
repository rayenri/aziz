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


const Testimonials = React.forwardRef((props, ref) => {
  // Use `ref` on the root element of the component or the specific element you want to reference
 
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
    <div ref={ref} className="cd-section" id="testimonials">
       
       
       <div className="testimonials-1">
           <Container>
             <Row>
               <Col className="ml-auto mr-auto text-center" md="6">
                 <h2 className="title">What Clients Say </h2>
               </Col>
             </Row>
               <Row >
                {/* <div className="w-100 d-flex justify-content-between" style={{height:"270px",padding:"20px", border: "2px solid rgba(27,127,204,.8)"}}>
                <Col className="ml-auto mr-auto text-center " md="1">
                 <div className="d-flex justify-content-center align-items-center">
                 <h2 className="title">Souad  </h2>
                 <img src={require("assets/img/BA/deutsh.png")} alt="Drapeau" style={{ width: '25px', height: '20px', marginLeft: '5px' }} />
             </div>
              </Col>
               <Col className="ml-auto mr-auto text-center mt-4" md="5">
               <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                 <h1 className="text-white  font-weight-bold">عزيز عاوني نبني بدني من أول و جديد بعد ماكنت نوزن 49 كيلو</h1>
               </div>
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
               </div> */}
               <div className="w-100" style={{ padding: "20px", border: "2px solid rgba(27,127,204,.8)" }}>
     <div className="row">
         <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center">
                 <h2 className="title ml-3">Souad</h2>
                 <img src={require("assets/img/BA/deutsh.png")} alt="Drapeau" style={{ width: '25px', height: '20px', marginLeft: '5px' }} />
             </div>
         </div>
         <div className="col-12 col-md-5 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100px' }}> {/* Adjust minHeight as needed */}
                 <h1 className="text-white font-weight-bold" style={{marginTop:"10%"}}>عزيز عاوني نبني بدني من أول و جديد بعد ماكنت نوزن 49 كيلو</h1>
             </div>
         </div>
         <div className="col-12 col-md-6">
             <div className="embed-responsive embed-responsive-16by9">
                 <iframe className="embed-responsive-item"
                     src="https://www.youtube.com/embed/uhGHRUR1VK4"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen>
                 </iframe>
             </div>
         </div>
     </div>
 </div>
 <div className="w-100 mt-3" style={{ padding: "20px", border: "2px solid rgba(27,127,204,.8)" }}>
     <div className="row">
         <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center">
                 <h2 className="title ml-3">Ahmed</h2>
                 <img src={require("assets/img/BA/france.png")} alt="Drapeau" style={{ width: '25px', height: '20px', marginLeft: '5px' }} />
             </div>
         </div>
         <div className="col-12 col-md-5 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100px'}}> {/* Adjust minHeight as needed */}
             <h1 className="text-white font-weight-bold" style={{marginTop:"10%"}}>أحسن حاجة عجبتني فالخدمة مع عزيز، هي أن النتيجة موجودة</h1>
             </div>
         </div>
         <div className="col-12 col-md-6">
             <div className="embed-responsive embed-responsive-16by9">
                 <iframe className="embed-responsive-item"
                     src="https://youtube.com/embed/l9ARYpmOPWw"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen>
                 </iframe>
             </div>
         </div>
     </div>
 </div>
 
 
 <div className="w-100 mt-3" style={{ padding: "20px", border: "2px solid rgba(27,127,204,.8)" }}>
     <div className="row">
         <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center">
                 <h2 className="title ml-3">Refk</h2>
                 <img src={require("assets/img/BA/france.png")} alt="Drapeau" style={{ width: '25px', height: '20px', marginLeft: '5px' }} />
             </div>
         </div>
         <div className="col-12 col-md-5 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100px' }}> {/* Adjust minHeight as needed */}
             <h1 className="text-white font-weight-bold "style={{marginTop:"10%"}}>خدمت قبل مع مدرب اخر لكن التجربة ماكانتش موفقة .. و فرحانة برشة إلي توا نخدم مع عزيز </h1>
             </div>
         </div>
         <div className="col-12 col-md-6">
             <div className="embed-responsive embed-responsive-16by9">
                 <iframe className="embed-responsive-item"
                     src="https://www.youtube.com/embed/tFrYzWqbfeE"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen>
                 </iframe>
             </div>
         </div>
     </div>
 </div>
            
           
 <div className="w-100  mt-3" style={{ padding: "20px", border: "2px solid rgba(27,127,204,.8)" }}>
     <div className="row">
         <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center">
                 <h2 className="title ml-3">Amine</h2>
                 <img src={require("assets/img/BA/usa.png")} alt="Drapeau" style={{ width: '25px', height: '20px', marginLeft: '5px' }} />
             </div>
         </div>
         <div className="col-12 col-md-5 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100px' }}> {/* Adjust minHeight as needed */}
             <h1 className="text-white font-weight-bold" style={{marginTop:"10%"}}>التمارين إلي خدمتهم مع عزيز مهمش كيما كل التمارين إلي تنجم تلقاهم في أي app</h1>            </div>
         </div>
         <div className="col-12 col-md-6">
             <div className="embed-responsive embed-responsive-16by9">
                 <iframe className="embed-responsive-item"
                     src="https://www.youtube.com/embed/OKhwah3ciQo"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen>
                 </iframe>
             </div>
         </div>
     </div>
 </div>

 <div className="w-100  mt-3" style={{ padding: "20px", border: "2px solid rgba(27,127,204,.8)" }}>
     <div className="row">
         <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center">
                 <h2 className="title ml-5">Youssef</h2>
                 <img src={require("assets/img/BA/usa.png")} alt="Drapeau" style={{ width: '25px', height: '20px', marginLeft: '5px' }} />
             </div>
         </div>
         <div className="col-12 col-md-5 text-center mb-2 mb-md-0">
             <div className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100px' }}> {/* Adjust minHeight as needed */}
             <h1 className="text-white font-weight-bold" style={{marginTop:"10%"}}>في شهرين نقصت بين 7 و 8 كيلو، و زدت في الكتلة العضلية بالرغم نخدم برشا و منجمش نمشي كل يوم ل gym</h1>            </div>
         </div>
         <div className="col-12 col-md-6">
             <div className="embed-responsive embed-responsive-16by9">
                 <iframe className="embed-responsive-item"
                     src="https://www.youtube.com/embed/gY6bdoo9oPY"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen>
                 </iframe>
             </div>
         </div>
     </div>
 </div>
               </Row>
 
              
           </Container>
 
      
         </div>
    
       
    </div>
  );
});

export default Testimonials;


