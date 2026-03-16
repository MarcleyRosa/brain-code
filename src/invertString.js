function invertString(string) {
  var newarr = ""
  for (let index = string.length-1; index > -1; index--) {
    newarr = newarr + string[index];
  }
  return newarr
}

module.exports = {
  invertString
}
