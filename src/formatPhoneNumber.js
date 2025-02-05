function formatPhoneNumber(telNumber) {
    if (telNumber.length == 11) {
        for (let index = 0; index < telNumber.length; index++) {
            if (telNumber[index] < 0 || telNumber[index] > 9) {
                return "não é possível gerar um número de telefone com esses valores";
            }
        }

        for (let target of telNumber) {
            let count = 0;

            for (let i = 0; i < telNumber.length; i++) {
                if (telNumber[i] === target) {
                    count++;
                }
            }

            if (count === 3) {
                return "não é possível gerar um número de telefone com esses valores";
            }
        }

        return `(${telNumber.slice(0, 2).join("")}) ${telNumber.slice(2, 7).join("")}-${telNumber
            .slice(7)
            .join("")}`;
    } else {
        return "Array com tamanho incorreto.";
    }
}

module.exports = {
    formatPhoneNumber,
};
