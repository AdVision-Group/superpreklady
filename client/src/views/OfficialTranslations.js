import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import TheOfficialTranslations from "../components/officialTranslations/TheOfficialTranslations";

export default function OfficialTranslations() {
    const stylePadding = {
        margin: '2px 20px 2px 20px'
    }
    return (
        <div>
            <Header stylePadding={stylePadding} />
            <TheOfficialTranslations/>
            <Contact />
            <Footer />
        </div>
    );
}
