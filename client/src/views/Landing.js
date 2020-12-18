import React, { useState } from "react";
import Header from "../components/header/Header";
import HeroSlider from "../components/hero/HeroSlider";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Reference from "../components/reference/Reference";

export default function Landing() {
  const [outSide, setOutSide] = useState(true);
  const [option, setOption] = useState(0);
  const stylePadding = {
      margin: '2px 20px 2px 20px'
  }
  return (
    <div>
      <Header selectCard={setOption} activeCard={option} outSide={outSide} stylePadding={stylePadding} />
      <HeroSlider />
      <Footer selectCard={setOption} activeCard={option} outSide={outSide} />
    </div>
  );
}
/*
      <Header selectCard={setOption} activeCard={option} outSide={outSide} stylePadding={stylePadding} />
      <HeroSlider />
      <About setOutSide={setOutSide} />
      <Services selectCard={setOption} activeCard={option} />
      <Reference/>
      <Contact />
      <Footer selectCard={setOption} activeCard={option} outSide={outSide} />
* */
