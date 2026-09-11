function minMax(arr) {
    const newArr = [];
    newArr.push(Math.min(...arr));
    newArr.push(Math.max(...arr));
    return newArr

}