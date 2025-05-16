function removeDuplicates(array) {
  const newArray = [];

  for(let i = 0; i < array.length; i++){
    const atual = array[i];
    if(!newArray.includes(atual)){
      newArray.push(atual);
    }
  }

  return newArray;
}

module.exports = {
  removeDuplicates
}
