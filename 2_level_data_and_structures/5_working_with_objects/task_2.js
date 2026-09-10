function filterByKeyLength(obj, maxLength) {
    const arr = Object.entries(obj);
    let newArr = []
    arr.forEach(elem => {
        if (String(elem[0]).length <= maxLength) {
            newArr.push(elem);
        };
    });
    const newObject = Object.fromEntries(newArr);
    return newObject
}