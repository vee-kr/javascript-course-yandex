function applyToEach(arr, predicate) { // 1
    return arr.map(predicate)
}

function applyToEach(arr, predicate) { // 2
    let res = []
    arr.forEach(elem => {
        res.push(predicate(elem));
    });
    return res
}
