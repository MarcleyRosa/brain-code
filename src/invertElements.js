function invertElements(array) {
  const newArray = [];
  for(let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

//const array = [8, 4, 60, 15];
//const newArray = invertElements(array);
//console.log(newArray);

module.exports = {
  invertElements
}
