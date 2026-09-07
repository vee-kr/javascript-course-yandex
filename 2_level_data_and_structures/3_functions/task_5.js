const calculate = function(num1, num2, operation) {
    const operations = {
        add: num1 + num2,
        subtract: num1 - num2,
        divide: num1 / num2,
        multiply: num1 * num2
    }
    return operations[operation]
}