function normalizeGroceryList(groceryList) {
    const arr = groceryList.split(',');
    const newArr = arr.map(elem => elem.trim()).filter(elem => elem !== '');

    return newArr.join(';');
}