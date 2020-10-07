import React, {useState} from "react";
import Header from "../components/header/Header";
import HeroSlider from "../components/hero/HeroSlider";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
export default function Landing() {
    const [option, setOption] = useState(0);
  return (
    <div>
      <Header selectCard={setOption} activeCard={option} />
      <HeroSlider />
      <About />
      <Services selectCard={setOption} activeCard={option} />
      <Contact />
      <Footer />
    </div>
  );
}
