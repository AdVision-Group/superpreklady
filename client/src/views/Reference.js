import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TheReference from "../components/reference/Reference";

export default function Reference() {
    const stylePadding = {
        margin: '2px 20px 2px 20px'
    }
    return (
        <div>
            <Header stylePadding={stylePadding} />
            <TheReference/>
            <Footer />
        </div>
    );
}