function getQuantityByName(cart) {
    return cart.reduce((acc, elem) => {
        if (!acc[elem.name]) {
            acc[elem.name] = 0;
        }
        acc[elem.name] += elem.quantity;
        return acc
    }, {});
}