function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}
let salaries = {
  Boho: 100,
  Anna: 160,
  Pete: 130,
};
alert(sumSalaries(salaries));
