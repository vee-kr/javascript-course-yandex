const x = 10;
const y = 5;

const temperature = 25;
const isRaining = false;
const hasUmbrella = true;

const age = 25;
const hasLicense = true;
const hasExperience = true;
const age2 = 20;
const hasLicense2 = true;

console.log((true && false) || true);
console.log(!(true || false));
console.log(!true || !false);
console.log((x > y) && (y === 5));
console.log(isRaining && !hasUmbrella);
console.log((age >= 25) && hasLicense && hasExperience);
console.log(!hasLicense2 || (age2 < 21));