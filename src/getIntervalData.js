function getIntervalData(array, inicio, fim) {
  // escreva seu código aqui
  const arrayNoIntervalo = array.filter(num => num >= inicio && num <= fim);

  // Retorna o objeto com o array filtrado e o contador
  return {
    arrayNoIntervalo,
    contador: arrayNoIntervalo.length
  };

}

module.exports = {
getIntervalData
}

