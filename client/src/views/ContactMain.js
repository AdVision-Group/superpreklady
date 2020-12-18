import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import TheCompanyInfo from "../components/company/TheConmapnyInfo";

export default function ContactMain() {
  const [outSide, setOutSide] = useState(false);
    const stylePadding = {
        margin: '2px 20px 2px 20px'
    }
  return (
    <div>
      <Header outSide={outSide} setOutSide={setOutSide} stylePadding={stylePadding} />
        <Contact />
      <div>
        <TheCompanyInfo />
      </div>

      <Footer />
    </div>
  );
}
