import React, { useState, useEffect } from "react";
import "../style/lists.css";
import Ratings from "./Ratings.js";
import { Link } from "react-router-dom";

const Lists = () => {
  const [ratingList, setRatingList] = useState("All Ratings");
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch("https://the-critics.herokuapp.com/ratings")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRatings(data);
      });
  }, []);

  const handleClick = (rating) => {
    setRatingList(rating);
  };

  const filterRender = () => {
    if (ratingList === "All Ratings") {
      return  (
        <Ratings
          ratingList={ratings}
          rating={ratingList.toUpperCase()}
        />
      );
    } else {
    const filteredRatings = ratings.filter(
      (rating) => rating.name === ratingList
    );
    return filteredRatings.length > 0 ? (
      <Ratings ratingList={filteredRatings} rating={ratingList.toUpperCase()} />
    ) : (
      <Link to="/search"></Link>
    );
  }};

  return (
    <div className="lists-container">
      <div className="lists-title">Roscoe + Elby's List</div>
      <div className="lists-options">
        <input
          type="button"
          className='"list-link'
          value="  🦴 "
          onClick={() => handleClick("Like")}
        />
        <input
          type="button"
          className='"list-link'
          value="👾"
          onClick={() => handleClick("Dislike")}
        />
      </div>
      <div className="food-list">{filterRender()}</div>
    </div>
  );
};

export default Lists;
