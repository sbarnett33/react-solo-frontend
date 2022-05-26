import React from "react";
import { useCallback } from "react";

const Ratings = (props) => {
  const callback = useCallback();

  const handleTrashClick = (id) => {
    const notRating = "notrated";

    callback(updateFood(id, notRating));
  };

  return (
    <div className="table-container">
      <div className="table-title text-center"> {props.rating} Dog Food </div>
      <div className="table-md"></div>
    </div>
  );
};
