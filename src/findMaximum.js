function findMaximum(array) {
  // escreva seu código aqui
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[0]) {
      array[0] = array[i];
    }
  }
  return array[0];
}

module.exports = {
  findMaximum
}
