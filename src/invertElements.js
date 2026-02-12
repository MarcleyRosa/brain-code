function invertElements(array) {
  var newarr = []
  for (let index = array.length-1; index > -1; index--) {
    newarr.push(array[index]);
  }
  return newarr
}

module.exports = {
  invertElements
}