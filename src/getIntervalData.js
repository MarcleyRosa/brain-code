function getIntervalData(array, inicio, fim) {
  
  const arrayNoIntervalo = [];
  let contador = 0;

  for(let i=0; i < array.length; i++){
    if(array[i] >= inicio && array[i] <= fim){
      arrayNoIntervalo.push(array[i]);
      contador++;
    }
  }

  return {arrayNoIntervalo, contador};
}

module.exports = {
getIntervalData
}

