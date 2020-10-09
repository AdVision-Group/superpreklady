import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import TheCompanyInfo from "../components/company/TheConmapnyInfo";
export default function ContactMain() {
  return (

    <div>
      <Header />
      <div>
        <TheCompanyInfo/>
      </div>
        <Contact/>
      <Footer />
    </div>
  );
}
