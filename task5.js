
const orders = [
    {
        orderId: 1,
        customer: { name: "Іван", email: "ivan@gmail.com" },
        items: [
            { name: "Миша", price: 500, quantity: 2 },
            { name: "Клавіатура", price: 1200, quantity: 1 }
        ],
        total: 2200
    },
    {
        orderId: 2,
        customer: { name: "Марія", email: "maria@gmail.com" },
        items: [
            { name: "Монітор", price: 8000, quantity: 1 }
        ],
        total: 8000
    },
    {
        orderId: 3,
        customer: { name: "Іван", email: "ivan@gmail.com" },
        items: [
            { name: "Навушники", price: 1500, quantity: 2 }
        ],
        total: 3000
    }
];

function getTotalSpentByCustomer(orders, customerName) {
    return orders
        .filter(order =>
            order.customer.name.toLowerCase() === customerName.toLowerCase()
        )
        .reduce((sum, order) => sum + order.total, 0);
}

console.log(
    "Витрати Івана:",
    getTotalSpentByCustomer(orders, "Іван"),
    "грн"
);

console.log(
    "Витрати Марії:",
    getTotalSpentByCustomer(orders, "Марія"),
    "грн"
);
