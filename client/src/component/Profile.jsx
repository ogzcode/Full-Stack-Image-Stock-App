import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


export default function Profile() {
    return (
        <div className="min-h-screen bg-black/20">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}