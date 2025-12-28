const employer = [
  {
    name: "Alice",
    position: "Developer",
    salary: 70000,
    id: 1,
    counttry: "USA",
  },
  { name: "Bob", position: "Designer", salary: 65000, id: 2, counttry: "UK" },
  {
    name: "Charlie",
    position: "Manager",
    salary: 80000,
    id: 3,
    counttry: "Canada",
  },
  {
    name: "Diana",
    position: "Developer",
    salary: 72000,
    id: 4,
    counttry: "Australia",
  },
];

function getEmployerNames(employer) {
  return employer.map((emo) => emo.name);
}
console.log("Employer Names:", getEmployerNames(employer));

function getTotalSalary(employer) {
  return employer.reduce((total, emo) => total + emo.salary, 0);
}
console.log("Total Salary:", getTotalSalary(employer));

function getHighEarners(employer, threshold) {
  return employer.filter((emo) => emo.salary > threshold);
}
console.log("High Earners:", getHighEarners(employer, 70000));

function sortBySalary(employer) {
  return employer.slice().sort((a, b) => b.salary - a.salary);
}
console.log("Sorted by Salary:", sortBySalary(employer));

function findById(employer, id) {
  return employer.find((emo) => emo.id === id);
}
console.log("Find by ID (3):", findById(employer, 3));

function groupByCountry(employer) {
  return employer.reduce((grouped, emo) => {
    if (!grouped[emo.counttry]) {
      grouped[emo.counttry] = [];
    }
    grouped[emo.counttry].push(emo);
    return grouped;
  }, {});
}
console.log("Grouped by Country:", groupByCountry(employer));
