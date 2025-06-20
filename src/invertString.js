function invertString(string) {
  // escreva seu código aqui
  let string_invertida = "";

  for (let i = string.length - 1; i >= 0; i--) {
      string_invertida += string[i];
  }
  return string_invertida;
}

module.exports = {
  invertString
}
// Edson Copque - https://linktr.ee/edsoncopque 
