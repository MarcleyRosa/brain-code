function formatPhoneNumber(telNumber) {
  const counts = new Array(10).fill(0);
  const errorMsg =
    "não é possível gerar um número de telefone com esses valores";

  if (telNumber.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (const element of telNumber) {
    if (element < 0 || element > 9) return errorMsg;

    counts[element]++;
    if (counts[element] > 2) return errorMsg;
  }

  const formatted =
    `(${telNumber[0]}${telNumber[1]}) ` +
    `${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}` +
    `-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;

  return formatted;
}

formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])

module.exports = {
  formatPhoneNumber,
};
