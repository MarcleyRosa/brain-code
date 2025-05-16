function calculateNetSalary(grossSalary) {
let salarioBase = grossSalary;

  // desconto do inss
  if (grossSalary <= 1556.94) {
    salarioBase -= grossSalary * 0.08;
  } else if (grossSalary <= 2594.92) {
    salarioBase -= grossSalary * 0.09;
  } else if (grossSalary <= 5189.82) {
    salarioBase -= grossSalary * 0.11;
  } else {
    salarioBase -= 570.88;
  }

  // desconto do ir
  if (salarioBase <= 1903.98) {
    // isento
  } else if (salarioBase <= 2826.65) {
    salarioBase -= (salarioBase * 0.075 - 142.80);
  } else if (salarioBase <= 3751.05) {
    salarioBase -= (salarioBase * 0.15 - 354.80);
  } else if (salarioBase <= 4664.68) {
    salarioBase -= (salarioBase * 0.225 - 636.13);
  } else {
    salarioBase -= (salarioBase * 0.275 - 869.36);
  }

  return `Salário: R$ ${salarioBase}`;

}

module.exports = {
    calculateNetSalary
}