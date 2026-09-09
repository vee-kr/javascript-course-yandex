function sortProducts(products) {
    return [...products].sort((a, b) => {
        if (a.price !== b.price) {
            return a.price - b.price
        }
        return a.name.localeCompare(b.name, 'ru')
    });
}