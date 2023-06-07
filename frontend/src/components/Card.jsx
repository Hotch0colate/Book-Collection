import React, { useState } from "react";
import "../styles/Card.css";

function Card({ imgPath, bookSeries, onclick, aura = false }) {
  return (
      <div className={aura ? "card-aura" : "card"} onClick={() => onclick()}>
        <img src={imgPath} alt="Card" />
        <div className="info">
          <h1>{bookSeries}</h1>
        </div>
      </div>  
  );
}

export default Card;



{/* <div className={aura ? "card-aura" : "card"} onClick={() => onclick()}>
      <img className="card-image" src={imgPath} alt="Card" />
        <h2 className={aura ? "card-title-aura" : "card-title"}>
          
        </h2>
    </div> */}