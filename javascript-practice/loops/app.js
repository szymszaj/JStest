function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

function averageSalary(salaries) {
  const totalSalaries = Object.values(salaries).length;
  return totalSalaries === 0 ? 0 : sumSalaries(salaries) / totalSalaries;
}

function validateSalaries(salaries) {
  if (typeof salaries !== "object" || salaries === null) {
    throw new Error("Invalid input: salaries should be a non-null object");
  }
  for (let key in salaries) {
    if (typeof salaries[key] !== "number" || salaries[key] < 0) {
      throw new Error(
        `Invalid salary for ${key}: should be a non-negative number`
      );
    }
  }
}

let salaries = {
  Boho: 100,
  Anna: 160,
  Pete: 130,
};

try {
  validateSalaries(salaries);
  alert(`Total Salaries: ${sumSalaries(salaries)}`);
  alert(`Average Salary: ${averageSalary(salaries)}`);
} catch (error) {
  alert(error.message);
}
