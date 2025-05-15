function invertString(string) {
  let stringTemp = "";
  for(let index = string.length-1; index >= 0 ; index--){
    stringTemp += string[index];
  }
  return stringTemp;
}

console.log(invertString("Diogo"));

module.exports = {
  invertString
}
