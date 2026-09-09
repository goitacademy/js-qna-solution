function calcSalaryTotal(salaries) {
  let total = 0;
  for (const salary of Object.values(salaries)) total += salary;
  return total;
}
console.log(calcSalaryTotal({ dev: 30000, qa: 22000 }), calcSalaryTotal({}));
