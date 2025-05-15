function calculateNetSalary(grossSalary) {
  let descontoINSS;
  let descontoIR;
  //INSS
  if(grossSalary <= 1556.94){
    descontoINSS = 0.08 * grossSalary;
  } else if(grossSalary <= 2594.92){
    descontoINSS = 0.09 * grossSalary;
  } else if(grossSalary <= 5189.82){
    descontoINSS = 0.11 * grossSalary;
  } else {
    descontoINSS = 570.88;
  }

  const salarioBase = grossSalary - descontoINSS;
  
  //IR
  if(salarioBase <= 1903.98){
    descontoIR = 0;
  } else if(salarioBase <= 2826.65){
    descontoIR = (0.075 * salarioBase) - 142.80;
  } else if(salarioBase <= 3751.05){
    descontoIR = (0.15 * salarioBase) - 354.80;
  } else if(salarioBase <= 4664.68) {
    descontoIR = (0.225 * salarioBase) - 636.13;
  } else {
    descontoIR = (0.275 * salarioBase) - 869.36;
  }

  const salarioLiquido = salarioBase - descontoIR;

  return `Salário: R$ ${salarioLiquido}`;
}

module.exports = {
    calculateNetSalary
}