function findMaximum(array) {
  let num = array[0];
  for(let i = 0; i <= (array.length - 1); i += 1){
    if(array.length === 0){
      return undefined;
    } else if(array[i] > num){
      num = array[i];
    }
  }
  return num;
}

module.exports = {
  findMaximum
}
