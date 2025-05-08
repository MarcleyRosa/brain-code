function removeDuplicates(array) {
  return Array.from(new Set(array));
}

const array = [1, 1, 1, 0, 0, 50, 3, 1];
console.log(removeDuplicates(array));


module.exports = {
  removeDuplicates
}
