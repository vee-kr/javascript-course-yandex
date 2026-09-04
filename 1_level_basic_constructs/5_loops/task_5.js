const students = [
    { name: 'Анна', score: 85 },
    { name: 'Иван', score: 42 },
    { name: 'Мария', score: 67 },
    { name: 'Петр', score: 55 },
    { name: 'Елена', score: 90 }
];

for (let student of students) {
        if (student.score >= 60) {
            console.log(`Имя: ${student.name}`);
        }
}