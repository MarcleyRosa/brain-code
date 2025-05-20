function formatPhoneNumber(telNumber) {
  if (telNumber.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let num of telNumber) {
    if (num < 0 || num > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  const counts = {};

  for (let num of telNumber) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  const ddd = `(${telNumber[0]}${telNumber[1]})`;
  const primeiraParte = `${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}`;
  const segundaParte = `${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;

  return `${ddd} ${primeiraParte}-${segundaParte}`;
}

module.exports = { formatPhoneNumber };
