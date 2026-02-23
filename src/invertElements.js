function invertElements(array) {
  const arrayInverted = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInverted.push(array[i]);
  }
  return arrayInverted;
}

module.exports = {
  invertElements,
};
