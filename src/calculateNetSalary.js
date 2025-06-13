function calculateNetSalary(grossSalary) {
  let inss;
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

  let ir;
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

  const format = (n) => {
    let s = n.toFixed(2);
    if (s.endsWith("00")) return s.slice(0, -3);
    if (s.endsWith("0")) return s.slice(0, -1);
    return s;
  };

  return `Salário: R$ ${format(netSalary)}`;
}

module.exports = {
  calculateNetSalary,
};
