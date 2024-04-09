import React from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <h1> This is home page</h1>
            <Footer />
        </div>
    )
}