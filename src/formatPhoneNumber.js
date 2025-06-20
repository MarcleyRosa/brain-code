function formatPhoneNumber(telNumber) {
  // escreva seu código aqui
  let my_flag = false;
  if (telNumber.length !== 11) {
      my_flag = true;
      return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < telNumber.length; i++) {
      if (telNumber[i] < 0 || telNumber[i] > 9) {
          my_flag = true;
          return 'não é possível gerar um número de telefone com esses valores';
      }
  }

  if (telNumber < 0) {
      my_flag = true;
      return 'não é possível gerar um número de telefone com esses valores';
  }
  
  for (let i = 0; i < telNumber.length; i++) {
      for (let j = 0; j < telNumber.length; j++) {
          for (let k = 0; k < telNumber.length; k++) {
              if ((i !== j && j !== k) && (i !== k)) {
                  if ((telNumber[i] === telNumber[j]) && (telNumber[j] === telNumber[k])) {
                      my_flat = true;
                      return 'não é possível gerar um número de telefone com esses valores'
                  }
              }
          }
      }
  }
  
  if (!my_flag) {
      return '(' + 
         telNumber[0] + 
         telNumber[1] + 
         ')' + 
         ' ' + 
         telNumber[2] +
         telNumber[3] + 
         telNumber[4] +
         telNumber[5] + 
         telNumber[6] + 
         '-' + 
         telNumber[7] +
         telNumber[8] +
         telNumber[9] +
         telNumber[10];
  }
}

module.exports = {
    formatPhoneNumber
}
// Edson Copque - https://linktr.ee/edsoncopque
