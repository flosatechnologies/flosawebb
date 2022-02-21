import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

function RouterComponent(props) {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Homepage} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/services" component={Services} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default RouterComponent;
