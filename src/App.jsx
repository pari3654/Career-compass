import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from"./Components/Hero/Hero";
import Resources from "./Components/Resources/Resources";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact";
import Footer from  "./Components/Footer/Footer";
import { Link } from 'react-scroll';


const App = () => {
    return (
        <div>
      <Navbar/>
      <Hero/>
      <Resources/>
      <About/>
      <Testimonials/>
      <Contact/> 
      <Footer/>
        </div>
    )
}
export default App;