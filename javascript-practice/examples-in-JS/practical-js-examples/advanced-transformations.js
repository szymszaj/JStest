import employeeData from "./data/employeeData.js";

const getEmployeeStats = (employees) => {
  return employees.map((emp) => ({
    fullInfo: `${emp.name} (${emp.department})`,
    experienceLevel: emp.yearsOfExperience > 5 ? "Senior" : "Junior",
    skillCount: emp.skills.length,
    avgProjectValue: emp.salary * emp.projects.length,
    efficiency: (emp.skills.length * emp.yearsOfExperience) / emp.age,
  }));
};

const groupByMultipleCriteria = (employees, criteria) => {
  return employees.reduce((acc, emp) => {
    const key = criteria.map((criterion) => emp[criterion]).join("-");
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(emp);
    return acc;
  }, {});
};

const getDepartmentStats = (employees) => {
  const deptGroups = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
      acc[emp.department] = {
        count: 0,
        totalSalary: 0,
        avgAge: 0,
        employees: [],
      };
    }
    acc[emp.department].count++;
    acc[emp.department].totalSalary += emp.salary;
    acc[emp.department].avgAge += emp.age;
    acc[emp.department].employees.push(emp.name);
    return acc;
  }, {});

  return Object.entries(deptGroups).map(([dept, stats]) => ({
    department: dept,
    employeeCount: stats.count,
    averageSalary: stats.totalSalary / stats.count,
    averageAge: stats.avgAge / stats.count,
    teamMembers: stats.employees,
  }));
};

const advancedSearch = (employees, criteria) => {
  return employees.filter((emp) => {
    return Object.entries(criteria).every(([key, value]) => {
      if (Array.isArray(emp[key])) {
        return emp[key].some((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
      }
      if (typeof value === "object") {
        const [operator, compareValue] = Object.entries(value)[0];
        switch (operator) {
          case "gt":
            return emp[key] > compareValue;
          case "lt":
            return emp[key] < compareValue;
          case "eq":
            return emp[key] === compareValue;
          default:
            return true;
        }
      }
      return String(emp[key])
        .toLowerCase()
        .includes(String(value).toLowerCase());
    });
  });
};

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
