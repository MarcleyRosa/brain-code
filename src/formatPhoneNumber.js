function formatPhoneNumber(telNumber) {
  // escreva seu código aqui
  if (telNumber.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let i = 0; i < telNumber.length; i++) {
      if (telNumber[i] < 0 || telNumber[i] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
      let contador = 0;
      for (numero of telNumber) {
        if (numero === telNumber[i]) {
          contador++;
        }
        if (contador > 2) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
    let formattedNumber = `(${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;
    return formattedNumber;
  }
}
module.exports = {
  formatPhoneNumber,
};
