function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

function averageSalary(salaries) {
  let totalSalaries = Object.values(salaries).length;
  if (totalSalaries === 0) return 0;
  return sumSalaries(salaries) / totalSalaries;
}

let salaries = {
  Boho: 100,
  Anna: 160,
  Pete: 130,
};

alert(`Total Salaries: ${sumSalaries(salaries)}`);
alert(`Average Salary: ${averageSalary(salaries)}`);
