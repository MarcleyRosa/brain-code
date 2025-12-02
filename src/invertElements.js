function invertElements(array) {
  let invertido = []
  for (let index = 0; index < array.length; index++) {
    invertido.unshift(array[index])
    
  }
  return invertido
}

module.exports = {
  invertElements
}