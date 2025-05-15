function calculateNetSalary(grossSalary) {
    let inss = 0;
    if(grossSalary >= 1556.94){
         inss = grossSalary * 0.08;
    }

    if(grossSalary >= 1556.95 && grossSalary <= 2594.92){
        inss = grossSalary * 0.09;
    }

    if(grossSalary >= 2594.93 && grossSalary <= 5189.82){
        inss = grossSalary * 0.11;
    }

    if(grossSalary > 5189.82){
        inss = grossSalary - 570.88;
    }
    let salarioBase = grossSalary - inss;
    let IR = 0;
    let salario = 0;
    if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
        IR = salarioBase * 0.075 - 142.80;
    }
    if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
        IR = salarioBase * 0.15 - 354.80;
    }
    if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
        IR = salarioBase * 0.225 - 636.13;
    }
    if(salarioBase >= 4664.68){
        IR = salarioBase * 0.275 - 869.36;
    }
        salario = salarioBase - IR;
    //console.log("ir - " + IR + " inss - " + inss + " Salario - " + salario);
    return "Salário: R$ " + salario;
}

console.log(calculateNetSalary(0));

module.exports = {
    calculateNetSalary
}