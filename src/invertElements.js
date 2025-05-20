function invertElements(array) {
  const inverted = [];

  for (let i = array.length - 1; i >= 0; i--) {
    inverted.push(array[i]);
  }

  return inverted;
}

console.log(invertElements([1, 2, 3]));

module.exports = {
  invertElements,
};
