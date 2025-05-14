function calculateNetSalary(grossSalary) {
  //  inss
  let aliquota, salarioBase
  if (grossSalary <= 1556.94){
    aliquota = 0.08
    salarioBase = grossSalary - (grossSalary * aliquota)
  } else if (grossSalary <= 2594.92) {
    aliquota = 0.09
    salarioBase = grossSalary - (grossSalary * aliquota)
  } else if (grossSalary <= 5189.82) {
    aliquota = 0.11
    salarioBase = grossSalary - (grossSalary * aliquota)    
  } else {
    inss = 570.88
    salarioBase = grossSalary - (inss)
  }
  

// imposto de renda
  let aliquotaIR, salarioLiquido
  if (salarioBase >= 1903.99 && salarioBase <= 2826.66){
    aliquotaIR = 0.075
    salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - 142.80)
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    console.log(3);
    aliquotaIR = 0.15
    salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - 354.80)
  } else if(salarioBase >= 3751.06 && salarioBase <=  4664.68){
    console.log(4);
    aliquotaIR = 0.225
    salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - 636.13)
  } else if (salarioBase > 4664.68){
    aliquotaIR = 0.225
    salarioLiquido = salarioBase - ((salarioBase * aliquotaIR) - 869.36)
  } else {
    // insento de IR
    salarioLiquido = salarioBase
  }

  return ("Salário: R$ " + salarioLiquido)
}

module.exports = {
    calculateNetSalary
}