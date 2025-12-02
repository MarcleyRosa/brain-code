function formatPhoneNumber(telNumber) {
  let resposta = ''
  let repetiu3x = false
  if (telNumber.length === 11) {
    for (let index = 0; index < telNumber.length; index++) {
      let repeticoes = 0
      for (let indice = 0; indice < telNumber.length; indice++) {
        if (telNumber[indice] === telNumber[index]) {
          repeticoes++
        }
        if (repeticoes >= 3)  {
          resposta = 'não é possível gerar um número de telefone com esses valores'
          repetiu3x = true
          break;
        }       
      }
      if (repetiu3x) {
        break;
      }
      if ((telNumber[index] >= 0) && (telNumber[index] <= 9)) {
        if (index == 0) {
          resposta = resposta + '('
        }
        if (index == 2) {
          resposta = resposta + ') '
        }
        if (index == 7) {
          resposta = resposta + '-'
        }
        resposta = resposta + telNumber[index]
      } else {
        resposta = 'não é possível gerar um número de telefone com esses valores'
        break;
      }
    }
  } else {
    resposta = "Array com tamanho incorreto."
  }
  return(resposta)
}

module.exports = {
    formatPhoneNumber
}

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
console.log(numero.length);

console.log(formatPhoneNumber(numero));
