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
