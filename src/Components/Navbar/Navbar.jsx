import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from'./Navnar.module.css'
export default function Navbar() {
  
  return (
    <>
     <nav className={`${styles.nav} navbar navbar-expand-lg sticky-top navbar-light`}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-4 fw-bold" to="rawdtty">Rawdtty</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item font">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="movie">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="tvshows">Tv Shows </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="people">People</Link>
        </li>
       
       
        
      </ul>
      <form class="d-flex ms-auto " role="search">
        <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
  
      </form>
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
        <div className="social-icons d-flex align-items-center">
          <i className='fab mx-2 fa-facebook'></i>
          <i className='fab mx-2  fa-spotify'></i>
          <i className='fab mx-2 fa-instagram'></i>
          <i className='fab mx-2 fa-youtube'></i>
        </div>
        <li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">Register </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="logout">Logout</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav> 
 </>   
  )
}
