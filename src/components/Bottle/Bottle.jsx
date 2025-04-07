import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleAddtoCart}) => {
    // bottle ke destructuring kore data er use
    const {img, name, price, stock} = bottle
    // console.log(bottle)
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Availabe: {stock}</p>
            <button onClick={() => handleAddtoCart(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;