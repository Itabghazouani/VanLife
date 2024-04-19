import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/avatar-icon.png"

export default function Navbar() {

  function currentLinkClassName({isActive}) {
    return isActive ? "current-link" : ""
  }

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }

  return (
    <header className="navbar">
      <Link to="/" className="navbar--logo">#VANLIFE</Link>
      <nav className="navbar--links">
        <NavLink to="/host" className={currentLinkClassName}>Host</NavLink>
        <NavLink to="/about" className={currentLinkClassName}>About</NavLink>
        <NavLink to="/vans" className={currentLinkClassName}>Vans</NavLink>
        <Link to="login" className="login-link"> <img src={imageUrl} className="login-icon"/></Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  )
}
