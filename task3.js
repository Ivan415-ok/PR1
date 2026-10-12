
const employees = [
    { name: "Олександр", position: "Програміст", salary: 35000, years: 5 },
    { name: "Марія", position: "Дизайнер", salary: 28000, years: 3 },
    { name: "Іван", position: "Адміністратор", salary: 30000, years: 7 },
    { name: "Анна", position: "Менеджер", salary: 32000, years: 4 }
];

function getAverageSalary(employees) {
    if (employees.length === 0) {
        return 0;
    }

    const totalSalary = employees.reduce(
        (sum, employee) => sum + employee.salary,
        0
    );

    return totalSalary / employees.length;
}

function findMostExperiencedEmployee(employees) {
    if (employees.length === 0) {
        return null;
    }

    return employees.reduce((mostExperienced, employee) => {
        return employee.years > mostExperienced.years
            ? employee
            : mostExperienced;
    });
}

console.log("Середня зарплата:", getAverageSalary(employees));

console.log("Працівник з найбільшим досвідом:");
console.log(findMostExperiencedEmployee(employees));
