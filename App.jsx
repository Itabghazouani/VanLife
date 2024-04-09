import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import Navbar from "./components/Navbar"
import Footer from './components/Footer';

import "./server"

export default function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/vans" element={<Vans />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}
