function displayElements(array) {
  for(let index = 0; index < array.length ; index++){
    console.log(array[index]);
  }
}
const array = [1, 2, 3, 4, 5];
displayElements(array);

module.exports = {
  displayElements
}