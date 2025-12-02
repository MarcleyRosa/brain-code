function invertElements(array) {
  let invertido = []

  for (let index = (array.length - 1); index >= 0 ; index--) {
  invertido[(array.length - 1)-index] = array[index] 
}
  //for (let index = 0; index < array.length; index++) {
  //  invertido.unshift(array[index])
  //  
  //}
  return invertido
}

module.exports = {
  invertElements
}

