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


module.exports = {
getIntervalData
}

