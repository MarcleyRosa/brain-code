function formatPhoneNumber(telNumber) {
  if(telNumber.length != 11) {
    return "Array com tamanho incorreto.";
  }
  
  let contador = {};
    
  for(let i = 0; i < telNumber.length; i++){
    const atual = telNumber[i];

    contador[atual] = (contador[atual] || 0) + 1;

    if(atual < 0 || atual > 9 || contador[atual] >= 3){
      return "não é possível gerar um número de telefone com esses valores"
    }

  }

  return `(${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;
}


module.exports = {
    formatPhoneNumber
}