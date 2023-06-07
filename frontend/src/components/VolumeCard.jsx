import React, { useEffect, useState } from "react";
import "../styles/VolCard.css";
import { updateBookByUserId } from "../services/request";

function VolumeCard({ book_series, book_vol, own }) {
  const [isOwn, setIsOwn] = useState(own);

  useEffect(() => {
    setIsOwn(own);
  }, [own]);

  const buttonOnClick = async () => {
    await updateBookByUserId(book_series, book_vol);
    setIsOwn(!isOwn);
  };

  return (
    <button className={"volcard " + (isOwn ? "own" : "not-own")} onClick={buttonOnClick}>
      <h1 className="number">{book_vol}</h1>
    </button>
  );
}

export default VolumeCard;
