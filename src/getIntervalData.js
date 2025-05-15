function getIntervalData(array, inicio, fim) {
  let arrayTemp = [];
  let index = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] >= inicio && array[i] <= fim ){
      arrayTemp[index] = array[i];
      index++;
    }
  }
  return { "arrayNoIntervalo":  arrayTemp, "contador":  arrayTemp.length };
}

module.exports = {
getIntervalData
}

