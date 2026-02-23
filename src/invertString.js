function invertString(string) {
  let stringInverted = "";
  for (const element of string) {
    stringInverted = element + stringInverted;
  }
  return stringInverted;
}

module.exports = {
  invertString,
};
