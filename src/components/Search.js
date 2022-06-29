import React, { useState, useEffect } from "react";
import "../style/search.css";
import Card from "./Card";

const Search = () => {
  const [foodType, setFoodType] = useState("All Food");
  const [food, setFood] = useState([]);
  const [setRating] = useState({});

  const handleFoodTypeClick = (e) => {
    setFoodType(e.target.value);
  };
  const handleRatingsClick = (id, e) => {
    console.log(e.target.value);
    const body = { rating: e.target.value };
    fetch(`https://the-critics.herokuapp.com/reaction/1/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRating(data);
      });
  };

  useEffect(() => {
    fetch("https://the-critics.herokuapp.com/the-critics.git/food")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFood(data);
      });
  }, []);

  const filterRender = () => {
    if (foodType === "All Food") {
      return food.map((food) => (
        <Card
          key={food.id}
          brand={food.brand}
          flavor={food.flavor}
          type={food.type}
          image={food.picture}
          onClick={(e) => handleRatingsClick(food.id, e)}
        />
      ));
    } else {
      const filteredFood = food.filter((food) => food.type === foodType);
      return filteredFood.length > 0 ? (
        filteredFood.map((food) => (
          <Card
            key={food.id}
            brand={food.brand}
            flavor={food.flavor}
            type={food.type}
            image={food.picture}
            onClick={(e) => handleRatingsClick(food.id, e)}
          />
        ))
      ) : (
        <p className="out-of-food">No Food</p>
      );
    }
  };

  const searchOptions = ["All Food", "Raw", "Freeze Dried", "Kibble"];
  return (
    <div className="search-page">
      <div className="search-title">Find Your Favs</div>
      <div className="search-options">
        {searchOptions.map((option, index) => (
          <input
            key={index}
            type="button"
            className="search-btn"
            value={option}
            onClick={handleFoodTypeClick}
          />
        ))}
      </div>
      <div className="cards-container">{filterRender()}</div>
    </div>
  );
};

export default Search;
