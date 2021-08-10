import React from "react";
import Nav from "./Nav.js";
import ModelVideo from "./Modelvideo";
import Header from "./header";
import About from "./about";
import Qualification from "./Qualification";
import Skill from "./Skill";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Scroll from "./Scroll";
import "../App.css";

class Test extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <ModelVideo />
        <Header />
        <About />
        <Qualification />
        <Skill />
        <Services />
        <Portfolio />
        <Testimonial />
        <Blog />
        <Contact />
        <Footer />
        <Scroll />
      </>
    );
  }
}
export default Test;
