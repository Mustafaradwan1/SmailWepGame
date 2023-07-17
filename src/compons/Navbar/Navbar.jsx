import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return <>
    <div className='container'>
      <nav className="navbar navbar-expand-sm">
        <Link className="navbar-brand m-0" to="Home">
          <img className='w-75' src={logo} alt=''/>
        </Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="Home" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="Browser">Browser</Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="Details">Details</Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="#">Streams</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
    </>
  }
}

