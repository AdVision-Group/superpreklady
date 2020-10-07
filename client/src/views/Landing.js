import React from "react";
import Header from "../components/header/Header"
import HeroSlider from "../components/hero/HeroSlider";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
export default function Landing() {
    return (
        <div>
            <Header/>
            <HeroSlider/>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    )
}