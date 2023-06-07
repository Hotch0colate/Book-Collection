import React from "react";
import "../styles/Navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOutRequest } from "../services/request";

const Navbar = () => {
  const admin = localStorage.getItem("admin") === 'true'

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

  const logoutPage = [
    {
      name: "LOGOUT",
      link: "/",
    },
  ];

  const adminPage = [
    {
      name: "ADMIN",
      link: "/admin"
    }
    ,
    {
      name: "ADDBOOK",
      link: "/addbook"
    }
    ,
    {
      name: "REMOVEBOOK",
      link: "/removebook"
    }
  ]
  
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
        {logoutPage.map((page, index) => (
          <li className="navbar-link" key={index+pages.length}>
            <Link
              className="navbar-btn"
              onClick={() => signOutRequest().then((data) => {
                console.log("gg",data)
                console.log(localStorage.getItem("accessToken"))
                navigate("/")})}
            >
              {page.name}
            </Link>
          </li>
        ))}
        {/* IMPROVE: may change charanter color to red */}
        {admin && adminPage.map((page, index) => (
            <li className="navbar-link" key={index}>
            <Link className="navbar-btn" to={page.link}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
