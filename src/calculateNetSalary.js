function calculateNetSalary(grossSalary) {
 let posAliquota = 0
 let liquido = 0
 if (grossSalary <= 1556.94) {
  posAliquota = grossSalary - ((grossSalary * 8)/100)
 } else {
  if (grossSalary <= 2594.92) {
    posAliquota = grossSalary - ((grossSalary * 9)/100)
  } else {
    if (grossSalary <= 5189.82) {
      posAliquota = grossSalary - ((grossSalary * 11)/100)
    } else {
      posAliquota = grossSalary - 570.88
    }
  }
 }

 if (posAliquota <= 1903.98) {
  liquido = posAliquota
 } else {
  if (posAliquota <= 2826.65) {
    liquido = posAliquota - (((posAliquota * 7.5)/100)-142.80)
  } else {
    if (posAliquota <= 3751.05) {
      liquido = posAliquota - (((posAliquota * 15)/100)-354.80)
    } else {
      if (posAliquota <= 4664.68) {
        liquido = posAliquota - (((posAliquota * 22.5)/100)-636.13)
      } else {
        liquido = posAliquota - (((posAliquota * 27.5)/100)-869.36)
      }
    }
  }
 }
 return(`Salário: R$ ${liquido}`)
}

module.exports = {
    calculateNetSalary
}