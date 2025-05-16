function invertString(string) {
  let newString = string.split("").reverse().join("");
  return newString;
}

module.exports = {
  invertString
}
