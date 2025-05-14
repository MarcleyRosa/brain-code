function removeDuplicates(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}


module.exports = {
  removeDuplicates,
};
