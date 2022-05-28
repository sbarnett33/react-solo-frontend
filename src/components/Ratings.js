import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Ratings = (props) => {
  const handleTrashClick = (reaction_id) => {
    fetch(`http://localhost:3001/reaction/${reaction_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="table-container">
      <div className="table-title text-center"> {props.rating} Dog Food </div>
      <div className="table-md">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Food Brand</th>
              <th scope="col">Food Flavor</th>
              <th scope="col">Food Type</th>
              <th scope="col">Dog</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {props.ratingList.map((item) => (
              <tr key={item.id}>
                <td className="align-middle">{item.name}</td>
                <td className="align-middle">{item.Food.brand}</td>
                <td className="align-middle">{item.Food.flavor}</td>
                <td className="align-middle">{item.Food.type}</td>
                <td className="align-middle">{item.Dog.name}</td>
                <td className="align-middle">
                  <button
                    className="trash-btn"
                    onClick={() => handleTrashClick(item.id)}
                  >
                    <FontAwesomeIcon className="icon" icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Ratings;
