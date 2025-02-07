function findMaximum(array) {
  // escreva seu código aqui

  if (array.length === 0) return undefined; // Retorna undefined para array vazio
    return Math.max(...array);
}

module.exports = {
  findMaximum
}
