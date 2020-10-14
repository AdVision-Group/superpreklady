import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TheCurriculum from "../components/curriculum/TheCurriculum";
import Contact from "../components/contact/Contact";
export default function ContactMain() {
  return (
    <div>
      <Header />
      <TheCurriculum />
      <Contact />
      <Footer />
    </div>
  );
}
