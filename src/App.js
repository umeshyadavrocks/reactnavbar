import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer";
import  "./styles.css";
import Contact from "./components/Contact";
import About from "./components/About";
import OurPartners from "./components/OurPartners";
import Events from "./components/Events";
import Alumni from "./components/Alumni";
import Notifications from "./components/Notifications";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider/>
      <About/>
      <Events/>
      <OurPartners/>
      <Alumni/>
      <Contact/>
      <Footer/>
    </>
  )
};


const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
      <Navbar/>
        <About />
        <Footer/>
      </Route>

      <Route path="/ourpartners">
        <Navbar/>
        < OurPartners/>
        <Footer/>
      </Route>

      <Route path="/Alumni">
        <Navbar/>
        <Alumni/>
        <Footer/>
      </Route>

      <Route path="/Notifications">
        <Navbar/>
        <Notifications/>
        <Footer/>
      </Route>

      <Route path="/contact">
      <Navbar/>
        <Contact />
        <Footer/>
      </Route>
    </Switch>
  );
};

export default App;
