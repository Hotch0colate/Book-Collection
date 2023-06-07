import React from 'react'
import "../styles/Navbar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navlanding = () => {

  const  pages = [
    {
      name: "Login",
      link: "/login"
    },
    {
      name: "Sign up",
      link: "/signup"
    }
  ]
  
  return (
    <div
      className="navbar"
    >
      <h1>LOGO</h1>
      <ul
        className="navbar-list"
      >
        {pages.map((page, index) => (
          <li
            className="navbar-link"
          key={index}>
            <Link 
            className="navbar-btn"
            to={page.link}>{page.name}</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Navlanding