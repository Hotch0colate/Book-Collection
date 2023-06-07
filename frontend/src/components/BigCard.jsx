import React, { useState, useEffect } from "react";
import VolumeCard from "../components/VolumeCard";
import "../styles/BigCard.css";
import { getListBookVolInSeriesByUserId, getAllBookInSeries } from "../services/request";

// TODO: onClickCloseButton make for close big card just use onClick={() => onClickCloseButton()}> on the component you use to be close button
function BigCard({ imgPath = "../assets/photos/BL.png", bookSeries , bookTitle, onClickCloseButton}) {
  const [book, setBook] = useState([]);
  const [listBookVol, setListBookVol] = useState([]);
  const [bookMaxVol, setBookMaxVol] = useState(1);

  useEffect(() => {
    getAllBookInSeries(bookSeries).then((res) => {
      setBookMaxVol(parseInt(res[0].book_max_vol))
      setBook(res[0])
    });

    getListBookVolInSeriesByUserId(bookSeries, 1).then((res) => {
      setListBookVol(res);
    });

  }, [bookSeries]);

  return (
    <div className="Bigcard">
      <div className="img_container">
        <img src={imgPath} alt="Card" className="img1" />
      </div>

      <div className="card_container">
        <div className="series_container">
          <h1>{bookSeries}</h1>
          <p>{bookTitle}</p>
        </div>

        <div className="vol_container">
          <div className="vol_flex">
            {book && Array.from(Array(bookMaxVol).keys()).map((index) => (
              <VolumeCard
                book_series = {bookSeries}
                book_vol = {index+1}
                own = {listBookVol.includes(index+1)}
              />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;