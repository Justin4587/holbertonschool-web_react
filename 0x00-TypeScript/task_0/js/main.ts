interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Buddy',
  lastName: 'Turd',
  age: 15,
  location: 'Home',
};

const student2: Student = {
  firstName: 'Justin',
  lastName: 'me',
  age: 40,
  location: 'Texas',

};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const headers: string[] = ['firstName', 'location'];



const tableHead: HTMLTableRowElement = thead.insertRow(0);
const cell1: HTMLTableCellElement = tableHead.insertCell(0);
cell1.innerHTML = headers[0];
const cell2: HTMLTableCellElement = tableHead.insertCell(1);
cell2.innerHTML = headers[1];

document.body.appendChild(table);
table.append(thead);
table.append(tbody);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});



