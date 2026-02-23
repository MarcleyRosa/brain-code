function invertElements(array) {
  let arrayTemp = [];
  let indexTemp = array.length-1;
  for(let index = 0; index < array.length ; index++){
    console.log(array[index]);
    arrayTemp[indexTemp--] = array[index];
  }
  return arrayTemp;
}

const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(invertElements(array));

module.exports = {
  invertElements
}