function formatPhoneNumber(telNumber) {

  // ddd
  telFormat = '('
  if (telNumber.length != 11){
    return 'Array com tamanho incorreto.'
  }
  count = [0,0,0,0,0,0,0,0,0,0]
  for (let index = 0; index < 2; index++) {
    if (telNumber[index]>9 || telNumber[index]<0){
      return "não é possível gerar um número de telefone com esses valores"
    }
    telFormat += telNumber[index];
    count[telNumber[index]] += 1
  }

  telFormat += ') '

  // primeiros números
  for (let index = 2; index < 7; index++) {
    if (telNumber[index]>9 || telNumber[index]<0){
      return "não é possível gerar um número de telefone com esses valores"
    }
    telFormat += telNumber[index];
    count[telNumber[index]] += 1
    if (count[telNumber[index]] >= 3){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  telFormat += '-'

  // ultimos números
  for (let index = 7; index < 11; index++) {
    if (telNumber[index]>9 && telNumber[index]<0){
      return "não é possível gerar um número de telefone com esses valores"
    }
    telFormat += telNumber[index];
    count[telNumber[index]] += 1
    if (count[telNumber[index]] >= 3){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  return telFormat
}


module.exports = {
    formatPhoneNumber
}