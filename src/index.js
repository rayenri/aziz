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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// presentation pages
import Index from "views/Index.js";
import Presentation from "views/Presentation.js";

import ContactUs from "views/examples/ContactUs.js";
import LandingPage from "views/examples/LandingPage.js";
import Headers from "./views/SectionsSections/Headers.js";
import Testimonials from "./views/SectionsSections/Testimonials.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Presentation />} />
      
    </Routes>
  </BrowserRouter>
);
