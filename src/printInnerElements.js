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

var x = [1,2,32,5,2356,54,7]
console.log(printInnerElements(x));
console.log(printInnerElements(['asf', 'asvsdh', 'dfgsfgdhghjh', 'asdhjkdfhfgd', 'sdf']))
console.log(printInnerElements([1,2]))
