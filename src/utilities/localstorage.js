const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if (storedCartString) {

        return JSON.parse(storedCartString)
    }
    return []
}
// save to local storage
const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)

}

const addToLs = id => {
    const cart = getStoredCart(); // Retrieve current cart
    cart.push(id); // Add new item
    saveCartToLS(cart); // Save updated cart back to localStorage
};

const removeFromLS = id =>{
    const  cart = getStoredCart()
    // remmoving every id
    const remaining = cart.filter(idx => idx !== id)
    saveCartToLS(remaining)
}
export { addToLs, getStoredCart, removeFromLS }