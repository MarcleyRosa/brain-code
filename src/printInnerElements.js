function printInnerElements(array) {
  if (array.length<3){
    console.log('Tamanho do array inválido');
    return('Tamanho do array inválido')    
  }
  else {
    var lista = []
    for (let index = 1; index < (array.length-1); index++) {
      lista.push(array[index])
    }
    for (let index = 0; index < lista.length; index++) {
      console.log(lista[index]);
    }
  }
}


module.exports = {
  printInnerElements
}
