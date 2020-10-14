import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TheCurriculum from "../components/curriculum/TheCurriculum";
import Contact from "../components/contact/Contact";
export default function ContactMain() {
    const stylePadding = {
        margin: '2px 20px 2px 20px'
    }
  return (
    <div>
      <Header stylePadding={stylePadding} />
      <TheCurriculum />
      <Contact />
      <Footer />
    </div>
  );
}
