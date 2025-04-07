import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart } from '../../utilities/localStorage';

const Bottles = ({ bottlePromise }) => {
    const bottles = use(bottlePromise);

    const [cart, setCart] = useState([])

    // useEffect(components er baire kicu kora ba side effect er kaj korar jonno use kora)
    useEffect(()=>{
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        console.log('stored cart', storedCart);
        setCart(storedCart);

    },[bottles])

    const handleAddtoCart = (bottle) => {
        // console.log('botte will be added to the cart',bottle)
        const newCart = [...cart, bottle];
        setCart(newCart)

        // save the bottle id in the storage
        addToStoreCart(bottle.id);
    }


    // console.log(bottles)
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Cart: {cart.length}</p>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id}
                        handleAddtoCart={handleAddtoCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;