function invertString(str) {
  let inverter = "";

  for (let i = str.length - 1; i >= 0; i--) {
    inverter += str[i];
  }

  return inverter;
}

console.log(invertString("hello"));

module.exports = {
  invertString,
};
