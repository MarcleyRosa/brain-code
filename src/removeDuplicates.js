function removeDuplicates(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}

module.exports = {
  removeDuplicates,
};
