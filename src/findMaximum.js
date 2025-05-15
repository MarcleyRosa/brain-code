function findMaximum(array) {
  let maxNumber = array[0];
  for(let index = 0; index < array.length ; index++){
    if(array[index] > maxNumber){
      maxNumber = array[index];
    }
  }
  return maxNumber;
}
const array = [5, 8, 2, 9, 3];
const maxNumber = findMaximum(array);
console.log(maxNumber);
module.exports = {
  findMaximum
}
