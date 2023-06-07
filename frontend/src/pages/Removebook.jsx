import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendRequest } from "../services/request";
import axios from "axios";
import "../styles/Login_Signup.css";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import { deleteBook } from "../services/request";

function RemoveBook() {
  const [bookSeries, setBookSeries] = useState("");

  const handleChange = (event) => {
    setBookSeries(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteBook(bookSeries).then((response) => {
      switch (response?.status) {
        case 200:
          alert("Book (" + `${bookSeries}` + ") has been added to database!");
          break;
        case 400:
          alert("Cannot delete book (" + `${bookSeries}` + ")");
          break;
        default:
          alert("Something went wrong!");
          break;
      }
    });
  };

  return (
    <>
      <div>
        <Navbar />
        <form className="form-request" onSubmit={handleSubmit}>
          <div className="title-request">
            <h1>Request</h1>

            <p>Book seris name</p>
            <input
              type="text"
              name="book_series"
              value={bookSeries}
              onChange={handleChange}
            />
          
            <div className="submit-container">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RemoveBook;
