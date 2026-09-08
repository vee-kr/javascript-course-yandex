const sumAll = function(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}