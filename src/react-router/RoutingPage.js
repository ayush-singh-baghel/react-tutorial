import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'

export default function RoutingPage() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </BrowserRouter>
    )
}
