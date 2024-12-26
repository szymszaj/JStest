const employees = [
  {
    id: 1,
    name: "John",
    department: "HR",
    salary: 1000,
  },
  {
    id: 2,
    name: "Jane",
    department: "IT",
    salary: 1500,
  },
  {
    id: 3,
    name: "Alice",
    department: "HR",
    salary: 1200,
  },
  {
    id: 4,
    name: "Bob",
    department: "IT",
    salary: 1300,
  },
  {
    id: 5,
    name: "Eve",
    department: "HR",
    salary: 1100,
  },
];

const updatedEmployees = employees.map((employee) => ({
  ...employee,
  salary: employee.salary * 1.7,
}));
console.log(updatedEmployees);
