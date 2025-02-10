function getIntervalData(array, inicio, fim) {
  x = {
    arrayNoIntervalo: [], 
    contador: 0
  }
  if (fim<inicio){
    return x
  }
  if (array.length >1){
    if (array.includes(inicio) && array.includes(fim)){


    // contador até o inicio
      index = 0 
      while(inicio != array[index]){
        index += 1
      }
      
      // contagem e insercao na lista
      while (fim != array[index]){    
        if (array[index] >= inicio){
        x.arrayNoIntervalo.push(array[index]);
        x.contador += 1
      }
        index += 1
      }
      x.arrayNoIntervalo.push(array[index]);
      x.contador += 1
    }
}
  // adiciona o ultimo

  return x
}


const array = [1, 2, 3, 4, 5, 1]
const intervalo = getIntervalData(array, 2, 4);
console.log(intervalo);

const array2 = [20, 14, 5, 6, 9, 63, 80, 120]
const intervalo2 = getIntervalData(array2, 20, 80);
console.log(intervalo2);

const array3 = [15, 4, 6, 9, 21, 30, 7]
const intervalo3 = getIntervalData(array3, 15, 30);
console.log(intervalo3);

module.exports = {
getIntervalData
}

