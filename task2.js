
const students = [
    { name: "Іван", age: 19, grade: 12, group: "КІ 23-01" },
    { name: "Олег", age: 17, grade: 12, group: "ПІ 23-02" },
    { name: "Марія", age: 18, grade: 11, group: "КІ 23-01" },
    { name: "Анна", age: 18, grade: 8, group: "ПІ 23-02" },
    { name: "Петро", age: 17, grade: 10, group: "КІ 23-01" }
];

function groupBy(students) {
    return students.reduce((groups, student) => {
        if (!groups[student.group]) {
            groups[student.group] = [];
        }

        groups[student.group].push(student);
        return groups;
    }, {});
}

function sortStudentsByGrade(students) {
    return [...students].sort((a, b) => b.grade - a.grade);
}

console.log("Студенти за групами:");
console.log(groupBy(students));

console.log("Студенти за оцінками:");
console.log(sortStudentsByGrade(students));
