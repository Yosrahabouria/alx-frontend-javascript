// main.ts

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Student[] = [
    { firstName: "Bruce", lastName: "Adam", age: 24, location: "Las Vegas" },
    { firstName: "Jane", lastName: "Smith", age: 22, location: "LA" }
];

function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    students.forEach(({ firstName, location }) => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement("td");
        locationCell.textContent = location;
        row.appendChild(locationCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", () => {
    renderTable(studentsList);
});

