function removeDuplicates(array) {
  const newArray = [];
  let pos = 0;

  for(let i = 0; i < array.length; i++){
    let duplicado = false;
    for(let j = 0; j < array.length; j++){
      if(array[i] == newArray[j]){
        duplicado = true;
        break;
      }
    }

    if (!duplicado) {
    newArray[pos] = array[i];
    pos ++;
  }
  }
  return newArray;
}

module.exports = {
  removeDuplicates
}
