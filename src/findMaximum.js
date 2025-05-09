function findMaximum(array) {
  let maior = array[0];
  for(let i=0; i < array.length; i++){
    if(array[i] > maior){
      maior = array[i];
    }
  }
  return maior;
}

//const array = [-1, -5, -3, -2];
//const maxNumber = findMaximum(array);
//console.log(maxNumber); 

module.exports = {
 findMaximum
}
