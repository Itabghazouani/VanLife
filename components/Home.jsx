import React from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <main className="main--home">
                <div className="main--home_content">
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <h2>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h2>
                    <Link to="#">Find your van</Link>
                </div>
            </main>
            <Footer />
        </div>
    )
}
