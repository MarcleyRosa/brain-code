function invertElements(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray[newArray.length] = array[i];
  }
  return newArray;
}

module.exports = {
  invertElements,
};
