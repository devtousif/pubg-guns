import React from 'react';
import './Cost.css'

const Cost = props => {
    console.log(props.cost)
    let totalCost = 0;
    for (const weapon of props.cost) {
        totalCost += weapon.price;
    }
    return (
        <div className="cart-container">
            <h3>Total Cost: ${totalCost}</h3>
            {props.cost.map(weapon => <ShowName name={weapon}></ShowName>)}
        </div>
    );
};

function ShowName(props) {
    const { name, img } = props.name;
    return (
        <div className="show-name"
            style={{
                display: "flex",
                border: "1px solid darkRed",
                margin: "5px",
                justifyContent: "space-around",
                alignItems: "center"
            }}
        >
            <img className="rotate"
                style={{
                    width: "80px",
                    height: "80px",
                    margin: "15px"
                }}
                src={img} alt="" />
            <h2>{name}</h2>
        </div>
    )
}

export default Cost;