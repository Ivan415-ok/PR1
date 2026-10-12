
const products = [
    { name: "Ноутбук", category: "Комп'ютери", price: 25000, inStock: 5 },
    { name: "Миша", category: "Периферія", price: 500, inStock: 0 },
    { name: "Клавіатура", category: "Периферія", price: 1200, inStock: 10 },
    { name: "Монітор", category: "Монітори", price: 8000, inStock: 3 },
    { name: "Навушники", category: "Аудіо", price: 1500, inStock: 0 }
];

function getAvailableProducts() {
    return products.filter(product => product.inStock > 0);
}

function findProductByName(name) {
    const product = products.find(
        product => product.name.toLowerCase() === name.toLowerCase()
    );

    return product || "Товар не знайдено";
}

console.log("Товари в наявності:");
console.log(getAvailableProducts());

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введіть назву товару: ", (name) => {
    console.log("Результат пошуку:");
    console.log(findProductByName(name));
    rl.close();
});
