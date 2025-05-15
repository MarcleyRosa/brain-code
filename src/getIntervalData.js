function getIntervalData(array, inicio, fim) {
  let resultado = {
    arrayNoIntervalo: [],
    contador: 0
  };
  
  for (let i = 0; i < array.length; i++){
    if(array[i] >= inicio && array[i] <= fim){
      resultado.arrayNoIntervalo.push(array[i]);
      resultado.contador++;
    }
  }
  
  return resultado;
}

module.exports = {
getIntervalData
}

