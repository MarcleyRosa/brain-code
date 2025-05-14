function calculateNetSalary(grossSalary) {
  let inss = 0;
  let ir = 0;

  if (grossSalary <= 1556.94) {
    inss = grossSalary * 0.08;
  } else if (grossSalary <= 2594.92) {
    inss = grossSalary * 0.09;
  } else if (grossSalary <= 5189.82) {
    inss = grossSalary * 0.11;
  } else {
    inss = 570.88;
  }

  const baseSalary = grossSalary - inss;

  if (baseSalary <= 1903.98) {
    ir = 0;
  } else if (baseSalary <= 2826.65) {
    ir = baseSalary * 0.075 - 142.8;
  } else if (baseSalary <= 3751.05) {
    ir = baseSalary * 0.15 - 354.8;
  } else if (baseSalary <= 4664.68) {
    ir = baseSalary * 0.225 - 636.13;
  } else {
    ir = baseSalary * 0.275 - 869.36;
  }

  const netSalary = baseSalary - ir;

  return `Salário: R$ ${netSalary}`;
}

module.exports = {
  calculateNetSalary,
};
