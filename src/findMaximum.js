function findMaximum(array) {
  let aux = array[0];
  for (const element of array) {
    if (element > aux) {
      aux = element;
    }
  }
  return aux;
}

module.exports = {
  findMaximum,
};
