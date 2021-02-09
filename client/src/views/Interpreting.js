import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TheInterpreting from "../components/interpreting/TheInterpreting";
import Contact from "../components/contact/Contact";

export default function Interpreting() {
    const stylePadding = {
        margin: '2px 20px 2px 20px'
    }
    return (
        <div>
            <Header stylePadding={stylePadding} />
            <TheInterpreting />
            <Footer />
        </div>
    );
}
