function removeDuplicates(array) {
  novoArray = []

  for (let index = 0; index < array.length; index++) {
    if (novoArray.length == 0) {
        novoArray[novoArray.length] = (array[index])
      }
      let repete = false
    for (let indice = 0; indice < novoArray.length; indice++) {
      
      if (array[index] === novoArray[indice]) {
        repete = true
        break;
      }
    }
    if (!repete) {
      novoArray[novoArray.length] = array[index]
    
    }
  
  }
return novoArray
}

module.exports = {
  removeDuplicates
}


