function findMaximum(array) {
  var max = array[0]

  for (let index = 1; index < array.length; index++) {
    if (array[index] > max){
      max = array[index];
    }
  }
  return max
}

module.exports = {
  findMaximum
}
