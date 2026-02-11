function calculateNetSalary(grossSalary) {
  // escreva seu código aqui
  if (typeof grossSalary !== 'number' || isNaN(grossSalary)) {
      return 'Digite um número válido.';
  }

  //INSS:
  let inss = 0;
  let inss_valor = 0;
  let salario_base = 0;
  
  if (grossSalary <= 1556.94) {
      inss = 8;
      inss_valor = ((grossSalary / 100) * inss);
  } else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
      inss = 9;
      inss_valor = ((grossSalary / 100) * inss);
  } else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
      inss = 11;
      inss_valor = ((grossSalary / 100) * inss);
  } else if (grossSalary > 5189.82) {
      inss = 570.88;
      inss_valor = 570.88;
  } else {
      console.log('Logic error.');
      return;
  }
  salario_base = (grossSalary - inss_valor);

  //IR:
  let ir = 0;
  let ir_valor = 0;
  let parcela = 0;

  if (salario_base <= 1903.98) {
      ir = 0;
      ir_valor = 0;
      parcela = 0;
  } else if (salario_base >= 1903.99 && salario_base <= 2826.65) {
      ir = 7.5;
      ir_valor = ((salario_base / 100) * ir);
      parcela = 142.80;
  } else if (salario_base >= 2826.66 && salario_base <= 3751.05) {
      ir = 15;
      ir_valor = ((salario_base / 100) * ir);
      parcela = 354.80;
  } else if (salario_base >= 3751.06 && salario_base <= 4664.68) {
      ir = 22.5;
      ir_valor = ((salario_base / 100) * ir);
      parcela = 636.13;
  } else if (salario_base > 4664.68) {
      ir = 27.5;
      ir_valor = ((salario_base / 100) * ir);
      parcela = 869.36;
  } else {
      console.log('Logic error.');
      return;
  }

  let salario_atualizado = (salario_base - (ir_valor - parcela));

  return 'Salário: R$ ' + salario_atualizado;
}

module.exports = {
    calculateNetSalary
}
// Edson Copque - https://linktr.ee/edsoncopque
