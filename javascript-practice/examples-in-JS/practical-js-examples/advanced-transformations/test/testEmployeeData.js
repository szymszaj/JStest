import {
  getEmployeeStats,
  groupByMultipleCriteria,
  getDepartmentStats,
  advancedSearch,
} from "../advanced-transformations.js";
import employeeData from "../data/employeeData.js";

console.log("Employee Stats:");
console.log(getEmployeeStats(employeeData));

console.log("\nGrouped by Department and Experience Level:");
console.log(
  groupByMultipleCriteria(employeeData, ["department", "yearsOfExperience"])
);

console.log("\nDepartment Statistics:");
console.log(getDepartmentStats(employeeData));

console.log("\nAdvanced Search - IT employees with salary > 5000:");
console.log(
  advancedSearch(employeeData, {
    department: "IT",
    salary: { gt: 5000 },
  })
);

console.log("\nAdvanced Search - Employees with JavaScript skills:");
console.log(
  advancedSearch(employeeData, {
    skills: "JavaScript",
  })
);
