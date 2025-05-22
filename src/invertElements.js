function invertElements(array) {
  let newArray = [];
  for(let i = 0; i <= (array.length -1); i += 1){
    let element = array[i];
    newArray.unshift(element);
  }
  return newArray;
}

module.exports = {
  invertElements
}