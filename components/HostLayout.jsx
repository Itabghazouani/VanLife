import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  function activeLink({isActive}) {
    return isActive ? activeStyle : null
  }

  return (
    <>
      <nav className="host-nav">
        <NavLink to="/host" style={(activeLink)} end>Dashboard</NavLink>
        <NavLink to="/host/income" style={activeLink}>Income</NavLink>
        <NavLink to="/host/reviews" style={activeLink}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}
