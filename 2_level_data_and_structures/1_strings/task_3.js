const text = "Программирование - это интересно";
let count = 0;
const alp = "аеёиоуыэюя"
for (let char of text) {
    char = char.toLowerCase()
    if (alp.includes(char)) {
        count ++
    }
}
console.log(count);