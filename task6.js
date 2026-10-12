
const products = [
    { productId: 1, name: "Ноутбук", price: 25000 },
    { productId: 2, name: "Миша", price: 500 },
    { productId: 3, name: "Клавіатура", price: 1200 },
    { productId: 4, name: "Монітор", price: 8000 }
];

const purchases = [
    { purchaseId: 1, productId: 1, quantity: 2 },
    { purchaseId: 2, productId: 2, quantity: 5 },
    { purchaseId: 3, productId: 3, quantity: 3 },
    { purchaseId: 4, productId: 1, quantity: 1 },
    { purchaseId: 5, productId: 4, quantity: 2 },
    { purchaseId: 6, productId: 2, quantity: 4 }
];

function getTotalSales(products, purchases) {
    return purchases.reduce((sales, purchase) => {
        const product = products.find(
            product => product.productId === purchase.productId
        );

        if (product) {
            if (!sales[product.name]) {
                sales[product.name] = 0;
            }

            sales[product.name] += product.price * purchase.quantity;
        }

        return sales;
    }, {});
}

console.log("Загальний дохід від продажу товарів:");
console.log(getTotalSales(products, purchases));
