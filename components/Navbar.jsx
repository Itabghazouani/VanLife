import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {

  function currentLinkClassName({isActive}) {
    return isActive ? "current-link" : ""
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar--logo">#VANLIFE</Link>
      <nav className="navbar--links">
        <NavLink to="/host" className={currentLinkClassName}>Host</NavLink>
        <NavLink to="/about" className={currentLinkClassName}>About</NavLink>
        <NavLink to="/vans" className={currentLinkClassName}>Vans</NavLink>
      </nav>
    </header>
  )
}
