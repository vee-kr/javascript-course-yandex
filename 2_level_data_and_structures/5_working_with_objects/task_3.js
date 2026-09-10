function analyzeValues(obj) {
    let newObj = {
        total: 0,
        numbers: 0,
        strings: 0
    }
    const values = Object.values(obj);
    values.forEach(value => {
        newObj.total += 1;
        if (Number.isInteger(value)) {
            newObj.numbers += 1;
        }
        else {
            newObj.strings += 1;
        }
    });
    return newObj
}