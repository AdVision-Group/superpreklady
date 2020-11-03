import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import TheNonOfficialTranslations from "../components/nonOfficialTranslations/TheNonOfficialTranslations";

export default function NonOfficialTranslations() {
    const stylePadding = {
        margin: '2px 20px 2px 20px'
    }
    return (
        <div>
            <Header stylePadding={stylePadding} />
            <TheNonOfficialTranslations/>
            <Contact />
            <Footer />
        </div>
    );
}
