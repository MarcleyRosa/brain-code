function calculateNetSalary(grossSalary) {
    let value = 0;

    //INSS
    if (grossSalary <= 1556.94) {
        value = grossSalary * 0.92;
    } else if (grossSalary <= 2594.92) {
        value = grossSalary * 0.91;
    } else if (grossSalary <= 5189.82) {
        value = grossSalary * 0.89;
    } else {
        value = grossSalary - 570.88;
    }

    //IR
    if (value > 1903.98 && value <= 2826.65) {
        value -= value * 0.075 - 142.8;
    } else if (value >= 2826.66 && value <= 3751.05) {
        value -= value * 0.15 - 354.8;
    } else if (value >= 3751.06 && value <= 4664.68) {
        value -= value * 0.225 - 636.13;
    } else if (value >= 4664.68) {
        value -= value * 0.275 - 869.36;
    }

    return `Salário: R$ ${parseFloat(value.toFixed(2))}`;
}

module.exports = {
    calculateNetSalary,
};
