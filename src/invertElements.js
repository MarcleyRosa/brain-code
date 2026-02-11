function invertElements(array) {
  // escreva seu código aqui
  let result = [];

  let start = 0;
  let end = (array.length - 1);

  while (start <= end) {
      result[start] = array[end];
      result[end] = array[start];

      start++;
      end--;
  }
  return result;
}
      
module.exports = {
  invertElements
}
// Edson Copque - https://linktr.ee/edsoncopque
