function calculateTotal (cart) {
    const total = cart.reduce((total, curElem) => total + curElem.price, 0);
    return total
}
let cart = [
    { name: 'Яблоки', price: 100, quantity: 2 },
    { name: 'Бананы', price: 80, quantity: 3 },
    { name: 'Яблоки', price: 100, quantity: 1 }
];