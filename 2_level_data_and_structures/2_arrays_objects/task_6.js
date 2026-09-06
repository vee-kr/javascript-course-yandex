const array1 = [1, 2, 3];
const array2 = array1;
array2[1] = 4;
const array3 = [1, 2, 3];

console.log(true);  // array1 === array2
console.log(false); // array1 === array3
console.log(false); // array2 === array3