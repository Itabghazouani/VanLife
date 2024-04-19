import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { getVan } from "../../api"

export default function HostVanDetail() {
  const { id } = useParams()
  const [currentVan, setCurrentVan] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVan(id)
        setCurrentVan(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }


  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  function currentActiveStyle({isActive}) {
    return isActive ? activeStyle : null
  }

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${currentVan.type}`}
            >
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink to="." style={currentActiveStyle} end>Details</NavLink>
          <NavLink to="pricing" style={currentActiveStyle}>Pricing</NavLink>
          <NavLink to="photos" style={currentActiveStyle}>Photos</NavLink>
        </nav>
        <Outlet context={{currentVan}}/>
      </div>
    </section>
  )
}
