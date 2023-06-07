import React from "react";
import "../styles/Navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOutRequest } from "../services/request";

const Navbar = () => {
  const pages = [
    {
      name: "HOME",
      link: "/home",
    },
    {
      name: "COLLECTIONS",
      link: "/collection",
    },
    {
      name: "REQUEST",
      link: "/request",
    },
  ];

  const pages2 = [
    {
      name: "LOGOUT",
      link: "/",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1>LOGO</h1>
      <ul className="navbar-list">
        {pages.map((page, index) => (
          <li className="navbar-link" key={index}>
            <Link className="navbar-btn" to={page.link}>
              {page.name}
            </Link>
          </li>
        ))}
        {pages2.map((page, index) => (
          <li className="navbar-link" key={index+pages.length}>
            <Link
              className="navbar-btn"
              onClick={() => signOutRequest().then((data) => navigate("/"))}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
