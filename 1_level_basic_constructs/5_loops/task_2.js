const numbers = [3, 8, 12, 5, 7, 14, 21, 10];
let count = 0;
for (let num of numbers) {
    if (num%2===0) {
        count ++;
    }
}
console.log(count);