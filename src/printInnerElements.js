function printInnerElements(array) {
  if (array.length >= 3){
    array.pop();
    array.shift();
    for(let i = 0; i <= (array.length -1); i += 1){
      console.log(array[i]);      
    }
  } else {
    console.log("Tamanho do array inválido");
  }
}

module.exports = {
  printInnerElements
}