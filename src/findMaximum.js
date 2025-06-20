function findMaximum(array) {
  // escreva seu código aqui
  if (array.length === 0) {
      return undefined;
  }
  let maior_numero = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i] > maior_numero) {
          maior_numero = array[i];
      }
  }
  return maior_numero;
}

module.exports = {
  findMaximum
}
// Edson Copque - https://linktr.ee/edsoncopque
