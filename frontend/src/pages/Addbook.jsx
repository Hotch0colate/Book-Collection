import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendRequest } from "../services/request";
import axios from "axios";
import "../styles/Login_Signup.css";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import { createBook } from "../services/request";

function AddBook() {
  const [formData, setFormData] = useState({
    book_series: "",
    book_desc: [],
    book_max_vol: "",
    book_img_path: "",
    book_title: "",
  });
  const [filterCategories, setFilterCategories] = useState([]);

  const categories = [
    "adventure",
    "comedy",
    "detective",
    "fantasy",
    "drama",
    "horror",
    "mystery",
    "romance",
    "sport",
    "action",
  ].sort();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.book_desc = filterCategories;
    createBook(formData).then((response) => {
      switch (response?.status) {
        case 200:
          alert("Book (" + `${formData.book_series}` + ") has been added to database!");
          break;
        case 400:
          alert("All ready have book in database!");
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
        <form className="form-addbook" onSubmit={handleSubmit}>
          <div className="title-request">
            <h1>Add book</h1>

            <p>Image path (Online path)</p>
            <input
              type="text"
              name="book_img_path"
              value={formData.book_img_path}
              onChange={handleChange}
            />
            <p>Book seris name</p>
            <input
              type="text"
              name="book_series"
              value={formData.book_series}
              onChange={handleChange}
            />
            <p>Book seris title</p>
            <input
              type="text"
              name="book_title"
              value={formData.book_title}
              onChange={handleChange}
            />
            <p>Book volume (max volume)</p>
            <input
              type="text"
              name="book_max_vol"
              value={formData.book_max_vol}
              onChange={handleChange}
            />
          
            <div>
              <div className="tag-filter-continer">
                {categories.map((category, index) => {
                  return (
                    <>
                      <input
                        className={
                          "filter " +
                          (filterCategories.includes(category)
                            ? "filter-active"
                            : "")
                        }
                        type="button"
                        id={category}
                        name={category}
                        value={category + (filterCategories.includes(category) ? "-> selected" : "-> unselected")}
                        onClick={(event) => {
                          setFilterCategories((prev) => {
                            const newCategories = [...prev];
                            if (!newCategories.includes(category)) {
                              newCategories.push(category);
                            } else if (newCategories.includes(category)) {
                              const index = newCategories.indexOf(category);
                              newCategories.splice(index, 1);
                            }
                            console.log(newCategories);
                            return newCategories;
                          });
                        }}
                      />
                    </>
                  );
                })}
              </div>
              <br />
            </div>

            <div className="submit-container">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBook;
