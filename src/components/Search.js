import React, { useState } from "react";
import '../styles/search.css';
import FoodCard from '../FoodCard';
import { connect, useCallback } from "react";
import { updateFood } from '../reduxactions';
import { Link } from 'react-router-dom';
//import store from "../redux/store";


const Search = (store) => {

    const [foodType, setFoodType] = useState("All Food");
    const callback = useCallback();
    
    const handleClick = (e) => {
        setFoodType(e.target.value);

        callback(updateFood(id, rating));

        alert(`Food Added`);
    }

    const filterRender = () => {
        let foodInStore = store.foodStore.dogFood;

        if (!foodInStore.length) {
            return <p className='out-of-food'>No Food <Link to='/'></Link></p>
        }

        if (foodType === "All Dog Food") {
            return foodInStore.map(food => (
                <FoodCard
                    key={food.id}
                    brandName={food.brand}
                    type={food.type}
                    image={food.pic}
                    onCllick={(e) => handleRatingsClick(food.id, e)}
                />   
            ));
        }

        const filteredFood = foodInStore.filter(food => food.type === foodType);
        return (filteredFood.length > 0) ? filteredFood.map(food => (
            <FoodCard
                    key={food.id}
                    brandName={food.brand}
                    type={food.type}
                    image={food.pic}
                    onCllick={(e) => handleRatingsClick(food.id, e)}
            />   
            
        )) : <p className="out-of-food">No Food</p>

    }

    const searchOptions = ["All Food", "Raw", "Freeze-Dried", "Kibble"]
    return (
        <div className="search-page">
            <div className="search-title">Search for Food</div>
            <div className="search-options">
                {searchOptions.map((option, index) => <input key={index} type="button" className="search-btn" value={option} onClick={handleClick} />)}
            </div>
            <div className="cards-container">
                {filterRender()}
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    foodStore: store.food,
})

export default connect(mapStateToProps)(Search);