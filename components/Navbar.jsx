import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar--logo">#VANLIFE</Link>
            <div className="navbar--links">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </nav>
    )
}
