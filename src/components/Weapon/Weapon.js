import React from 'react';
import './Weapon.css'

const Weapon = props => {
    const { name, img, type, price, origin, mass } = props.weapon;
    return (
        <div className='weapon-container'>
            <img src={img} alt="" />
            <div className='weapon-details'>
                <h2>Name: <span className="muted-text">{name}</span></h2>
                <h3>Type: <span className="muted-text">{type}</span></h3>
                <h3>Origin: <span className="muted-text">{origin}</span></h3>
                <h3>Weight: <span className="muted-text">{mass}k.g</span></h3>
                <h3>Price: $<span className="muted-text">{price}</span> </h3>
                <button onClick={() => props.getData(props.weapon)} className="add-button">Add To Cart</button>
            </div>

        </div>
    );
};

export default Weapon;