import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNumberBookInSeries } from "../services/request";
import "../styles/Landing.css";
import Navlanding from "../components/Navlanding";

function Landing() {
  const [seriesCount, setseriesCount] = useState("");

  useEffect(() => {
    getNumberBookInSeries().then((res) => {
      setseriesCount(res.seriesCount);
    });
  }, []);

  return (
    <>
      <Navlanding />
      <div className="Landing-container">
        <div className="Title-Landing">
          <h1>Collect </h1>
          <h1>Your manga</h1>
          <h1>Collection !!</h1>
          <Link to="/login">
            <button>
              Let's go ❯{" "}
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="Container">
          <div className="Title-container">
            <h1>New book!!</h1>
            <br />
            <p>check out the new book</p>
            <p>release from the manga</p>
            <p>you're collecting</p>
          </div>
          <div className="Title-container">
            <h1>which book doesn't</h1>
            <h1>have one yet?</h1>
            <br />
            <p>Fixed issues with incomplete</p>
            <p>and duplicate books</p>
          </div>
          <div className="Title-container">
            <h1>Create your collection</h1>
            <br />
            <p>Helper to make your</p>
            <p>collection more convenient</p>
            <p>with huge manga library</p>
          </div>
        </div>
      </div>

      <div className="Series-container">
        <p>
          <b>more than</b>
        </p>
        <div>
          <b>
            {seriesCount}
            <span> </span>series
          </b>
        </div>
      </div>
      <div className="Footer-container">
        <h1>join us</h1>
        <p>Let's build your collection.</p>
        <Link to="/login">
          <button>
            Let's go  ❯{" "}
          </button>
        </Link>
      </div>
    </>
  );
}

export default Landing;
