import React, {useState} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import TheCompanyInfo from "../components/company/TheConmapnyInfo";

export default function ContactMain() {
    const [outSide, setOutSide] = useState (false)
  return (

    <div>
      <Header outSide={outSide} setOutSide={setOutSide} />
      <div>
        <TheCompanyInfo/>
      </div>
        <Contact/>
      <Footer />
    </div>
  );
}
