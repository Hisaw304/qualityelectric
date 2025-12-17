import React from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import OurServices from "../components/OurServices";
import About from "../components/About";
import AboutInfo from "../components/AboutInfo";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <About />
      <AboutInfo />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
