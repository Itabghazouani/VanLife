import React, {useState, useEffect} from 'react';
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from '../../api';

export default function Vans() {

  const [searchParams, setSearchParams] = useSearchParams()
  const [allVans, setAllVans] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = React.useState(null)

  const typeFilter = searchParams.get("type")

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        setAllVans(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [])

  const displayedVans = typeFilter
  ? allVans.filter(van => van.type === typeFilter)
  : allVans

  const vanElements = displayedVans.map(van => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
        <div className="van-info">
          <h3>{van.name}</h3>
          <div className="van-price">
            <p>${van.price}</p><span>/day</span>
          </div>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  if (loading) {
    return <h1 className='loading-text' aria-live="polite">Loading...</h1>
  }

  if (error) {
    return <h1 aria-live="assertive">There was an error: {error.message}</h1>
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">

      <button
        onClick={() => handleFilterChange("type", "simple")}
        className={`van-type simple ${typeFilter === "simple" && "selected"}`}
      >Simple</button>
      <button
        onClick={() => handleFilterChange("type", "luxury")}
        className={`van-type luxury ${typeFilter === "luxury" && "selected"}`}
      >Luxury</button>
      <button
        onClick={() => handleFilterChange("type", "rugged")}
        className={`van-type rugged ${typeFilter === "rugged" && "selected"}`}
      >Rugged</button>

      {typeFilter &&
        <button
          onClick={() => handleFilterChange("type", null)}
          className="van-type clear-filters"
        >Clear filter</button>
      }
        {/* <Link to="?type=simple" className="van-type simple">Simple</Link>
        <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
        <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
        <Link to="." className="van-type clear-filters">Clear filters</Link> */}
      </div>

      { displayedVans ? (
      <div className="van-list">
        {vanElements}
      </div>
      ) : <h2>Loading...</h2> }

    </div>
  )
}
