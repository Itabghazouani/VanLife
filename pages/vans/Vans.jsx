import React from 'react';
import { Link } from "react-router-dom";

export default function Vans() {

  const [allVans, setAllVans] = React.useState([])

  React.useEffect(() => {
      async function getVans() {
          const res = await fetch("/api/vans")
          const data = await res.json()
          setAllVans(data.vans)
      }
      getVans()
  }, [])

  const vanElements = allVans.map(van => (
    <div key={van.id} className="van-tile">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
        <div className="van-info">
          <h2>{van.name}</h2>
          <div className="van-price">
            <p>${van.price}</p><span>/day</span>
          </div>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      { allVans ? (
      <div className="van-list">
        {vanElements}
      </div>
      ) : <h2>Loading...</h2> }
    </div>
  )
}
