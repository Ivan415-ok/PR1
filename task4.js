
const books = [
    { title: "Кобзар", author: "Тарас Шевченко", year: 1840, rating: 5, isRead: true },
    { title: "Лісова пісня", author: "Леся Українка", year: 1911, rating: 5, isRead: false },
    { title: "Захар Беркут", author: "Іван Франко", year: 1883, rating: 4, isRead: true },
    { title: "Енеїда", author: "Іван Котляревський", year: 1798, rating: 4.5, isRead: false },
    { title: "Каменярі", author: "Іван Франко", year: 1878, rating: 4.8, isRead: false }
];

function getUnreadBooks(books) {
    return books.reduce((unread, book) => {
        if (!book.isRead) {
            unread.push(book.title);
        }

        return unread;
    }, []);
}

function getBooksByAuthor(books, author) {
    return books
        .filter(book => book.author.toLowerCase() === author.toLowerCase())
        .sort((a, b) => a.year - b.year);
}

function getTopRatedBooks(books) {
    return books
        .filter(book => book.rating > 4)
        .sort((a, b) => b.rating - a.rating);
}

console.log("Непрочитані книги:");
console.log(getUnreadBooks(books));

console.log("Книги Івана Франка:");
console.log(getBooksByAuthor(books, "Іван Франко"));

console.log("Книги з рейтингом вище 4:");
console.log(getTopRatedBooks(books));
