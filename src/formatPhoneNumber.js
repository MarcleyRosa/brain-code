function formatPhoneNumber(telNumber) {
  if(telNumber.length != 11){
    return "Array com tamanho incorreto.";
  }
  let retorno = "(";
  for(let i = 0; i < telNumber.length; i++){
    if(telNumber[i]< 0 || telNumber[i]> 9){
      return "não é possível gerar um número de telefone com esses valores"
    }
    let contador = 0;
    for(let j = 0; j < telNumber.length; j++){
      if(telNumber[i] == telNumber[j]){
        contador++;
      }
      if(contador == 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  if(i == 2){
      retorno += ") "  
    }
    if(i == 7){
      retorno += "-"  
    }
    retorno += telNumber[i];
  }
  return retorno;
}

module.exports = {
    formatPhoneNumber
}