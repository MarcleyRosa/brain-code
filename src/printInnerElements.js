function printInnerElements(array) {
  if(array.length < 3){
    console.log('Tamanho do array inválido');
    return;
  }
  for(let index = 1; index < array.length-1 ; index++){
    console.log(array[index]);
  }
}

module.exports = {
  printInnerElements
}