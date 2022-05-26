import React, { useState } from 'react';
import '../styles/lists.css';
import Ratings from '../ratings';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Lists = (store) => {
    const [ratingList, setRatingList] = useState('favorite');

    const handleClick = (rating) => {
        setRatingList(rating);

    }
    
    const filterRender = () => {
        let foodInStore = store.foodStore.dogFood;

        if (!foodInStore.length) {
            return <p className='out-of-food'>No Food <Link to='/'></Link></p>
        }

        

        const filteredFoods = foodInStore.filter(food => food.ratings === Ratings);
        return (
        filteredFoods.length > 0) ? <Ratings foodList={filteredFoods} rating={Ratings.toUpperCase()} /> : <Link to='/search'></Link> 
    }

    return (
        <div className='list-container'>
            <div className='lists-title'>Roscoe + Elby's List</div>
            <div className='list-options'>
                <input type='button' className='"list-link' value='Favorites' onClick={() => handleClick('favorite')} />
                <input type='button' className='"list-link' value='Nasty' onClick={() => handleClick('nasty')} />
            </div>
            <div className='food-list'>
                {filterRender()}
            </div>
        </div>
    )


    
    

}


<Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

const mapStateToProps = state => ({
    foodStore: state.foods,
})

export default connect(mapStateToProps)(Lists);
