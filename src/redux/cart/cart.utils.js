export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check to see if the cart has this item
    const existingCartItem = cartItems.find(cartItem => cartItem.id ===cartItemToAdd.id);
    // if it does, return a +1 on the quantity!
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id ===cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity+1 }
            : cartItem
            )
    }
    // otherwise, set its quantity to 1. since it will exists if there's a quant set, it's perfect.
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id ===cartItemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem)
}