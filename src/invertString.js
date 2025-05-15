function invertString(string) {
  let palavraInvertida = "";
  for(let i = (string.length - 1); i >= 0; i -= 1){
    palavraInvertida += string[i];
  }
  return palavraInvertida
}

module.exports = {
  invertString
}
