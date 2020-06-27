import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bgColor" >
        <Link className="navbar-brand" to="/">Kele's</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Bio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

    </> 
  )
}

export default Navbar

{/* <Link to="/"></Link>
<Link to="/Portfolio"></Link>
<Link to="/Contact"></Link> */}