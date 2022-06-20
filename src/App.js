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

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider/>
      <About/>
      <Events/>
      <OurPartners/>
      <Contact/>
      <Footer/>
    </>
  )
};

// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical About Page</h1>
//       </section>
//     </>
//   );
// };

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Service Page</h1>
      </section>
    </>
  );
};

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <Contact/>
//     </>
//   );
// };

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

      <Route path="/contact">
      <Navbar/>
        <Contact />
        <Footer/>
      </Route>
    </Switch>
  );
};

export default App;
