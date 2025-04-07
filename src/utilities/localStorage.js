
/**
 * 1. to get something from local Storage, you will get it as a string
 * 2. convert this to javaScript object/array
 * */ 

const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }

    return[]
}

// below line for demo:2
const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addItemToCartLocalStorage = id => {
    // console.log(id)
    const cart = getCartFromLocalStorage();
    // demo:1
    // cart.push(id)

    // another way demo:2

    const newCart = [...cart, id]

    // save new cart to local storage
    saveCartToLocalStorage(newCart)
}

const removeFromLocalStorage = id =>{
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartToLocalStorage(remainingCart)
}


export{
    getCartFromLocalStorage as getStoreCart,
    addItemToCartLocalStorage as addToStoreCart,
    removeFromLocalStorage as removeFromCart
}