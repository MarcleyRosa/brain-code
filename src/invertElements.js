function invertElements(array) {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    let pos = array.length - i - 1;

    newArray[i] = array[pos];
  }
  return newArray;
}

const array = [8, 4, 60, 15];
const newArray = invertElements(array);
console.log(newArray);

module.exports = {
  invertElements
}
