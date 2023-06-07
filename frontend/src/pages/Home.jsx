import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllSeries } from "../services/request";
import Card from "../components/Card";
import BigCard from "../components/BigCard";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  const [allSeries, setAllSeries] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filterName, setFilterName] = useState("");
  let indexBigCard = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    getAllSeries().then((series) => {
      setAllSeries(series);
      indexBigCard = allSeries.indexOf(series);
    });
  }, []);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchName]);

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

  const [filterCategories, setFilterCategories] = useState([]);

  return (
    <div>
      <Navbar />
      <div className="container-home">
        <div className="container-filter">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-input"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />

            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div>
            <div className="tag-filter-continer">
            {categories.map((category, index) => {
              return (
                <>
                  <input
                    className={
                      // TODO: create a css "active" class for category buttons also make button look better please (normal class)
                      // done
                      "filter " +
                      (filterCategories.includes(category) ? "filter-active" : "")
                    }
                    type="button"
                    id={category}
                    name={category}
                    value={category}
                    onClick={(event) => {
                      setFilterCategories((prev) => {
                        const newCategories = [...prev];
                        if (!newCategories.includes(category)) {
                          newCategories.push(category);
                        } else if (newCategories.includes(category)) {
                          const index = newCategories.indexOf(category);
                          newCategories.splice(index, 1);
                        }
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
        </div>
        <div className="container-center">
          <div
            className={
              "container-card" + (selectedIndex !== -1 ? " flex-col" : "")
            }
          >
            {allSeries
              ?.filter(filterSeriesName)
              ?.filter(filterSeriesCategories)
              ?.map((series, index) => {
                return (
                  <div key={index}>
                    <Card
                      bookSeries={series.book_series}
                      imgPath={series.book_img_path}
                      onclick={() => {
                        setSelectedIndex((prev) =>
                          prev === index ? -1 : index
                        );
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        { selectedIndex !== -1 && (
          <BigCard
            key={selectedIndex}
            bookSeries={allSeries[selectedIndex].book_series}
            imgPath={allSeries[selectedIndex].book_img_path}
            bookTitle={allSeries[selectedIndex].book_title}
            onClickCloseButton={() => setSelectedIndex(-1)}
          />
        ) }
      </div>
    </div>
  );

  function filterSeriesName(series) {
    if (searchName === "") {
      return true;
    } else if (
      series.book_series
        .trim()
        .toLowerCase()
        .includes(searchName.trim().toLowerCase())
    ) {
      return true;
    }
    return false;
  }

  function filterSeriesCategories(series) {
    if (filterCategories === []) {
      return true;
    } else {
      for (let i = 0; i < filterCategories.length; i++) {
        if (
          !series.book_desc
            .map((name) => name.toLowerCase())
            .includes(filterCategories[i].toLowerCase())
        )
          return false;
      }
    }
    return true;
  }
}

export default Home;
