function removeDuplicates(array) {
  let arr = []
  for (let index = 0; index < array.length; index++) {
    if (arr.includes(array[index])){
      continue
    }else{
      arr.push(array[index])
    }
    
  }
  return arr
}

module.exports = {
  removeDuplicates
}
