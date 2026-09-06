const book = {
    title: 'Война и мир',
    author: 'Толстой',
    year: 1869
};
book.year = 1867;
book.pages = 1274;
delete book.author;
console.log(book);