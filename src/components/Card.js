import React from "react";
import '..styles/Card.css';
import ReactTooltip from "react-tooltip";

const card = (props) => {

    return (
        <div className="card" style={{"width": "18rem"}} key={props.id}>
            <img className="card-img-top food-label" src={props.image} alt="Food Label" height="120rem"></img>
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <h5 className="card-subtitle mb-2 text-muted">{props.type}</h5>
                <p className="card-text">{props.info}</p>
            </div>
            <div className="card-btns card-footer">
                <button className="card-btn" values="favorite" onClick={props.onClick} data-tip data-for="fav">
                    🦴 
                </button>
                <ReactTooltip id="fav" place="top" effect="solid" backgroundColor='#ce8b10'>
                    I Love 'Dis
                </ReactTooltip>
                <button className="card-btn" value="nasty" onClick={props.onClick} data-tip data-for="nasty">
                    👾
                </button>
                <ReactTooltip id="nasty" place="top" effect="solid" backgroundColor='#ce8b10'>
                    No Like 'Dis
                </ReactTooltip>
            </div>
        </div>
            
    )

}

export default card; 