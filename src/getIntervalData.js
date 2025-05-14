function getIntervalData(array, inicio, fim) {
  let arrayNoIntervalo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= inicio && array[i] <= fim) {
      arrayNoIntervalo.push(array[i]);
    }
  }
  return {
    arrayNoIntervalo,
    contador: arrayNoIntervalo.length,
  };
}

module.exports = {
  getIntervalData,
};
