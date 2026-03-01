function findMaximum(array) {
  if (array != '' ) {
    
  
  let maior = -999
  for (let index = 0; index < array.length; index++) {
    if (array[index]>maior) {
      maior = array[index]
    }
    
  }
  return(maior)
}
}

module.exports = {
  findMaximum
}
