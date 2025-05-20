function displayElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const array = [1, 2, 3, 4, 5];
displayElements(array);

module.exports = {
  displayElements,
};
