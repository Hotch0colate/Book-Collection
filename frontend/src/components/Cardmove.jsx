import React from 'react'
import "../styles/Card.css"

const Cardmove = () => {
  return (
    <div className='cardmove'>
        <div className={aura ? "card-aura" : "card"} onClick={() => onclick()}>
        <img src={imgPath} alt="Card" />
        <div className="info">
          <h1>{bookSeries}</h1>
        </div>
      </div>
    </div>
  )
}

export default Cardmove