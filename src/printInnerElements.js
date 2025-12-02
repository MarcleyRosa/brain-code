function printInnerElements(array) {
  if ((array != '')  && (array.length >=3)) {
    
  
  
  for (let index = 0; index < array.length; index++) {
    if (index > 0) {
      if (index < array.length-1) {
        console.log(array[index]);
        
      }
    }
  } 
  } else {
    console.log('Tamanho do array inválido')
      
    }
}

module.exports = {
  printInnerElements
}