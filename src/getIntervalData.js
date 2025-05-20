function getIntervalData(array, inicio, fim) {
  // Verificações de entrada inválida
  if (!Array.isArray(array) || isNaN(inicio) || isNaN(fim) || inicio > fim) {
    return {
      arrayNoIntervalo: [],
      contador: 0,
    };
  }

  // Filtra os valores que estão dentro do intervalo fechado [inicio, fim]
  const arrayNoIntervalo = array.filter((num) => num >= inicio && num <= fim);

  return {
    arrayNoIntervalo,
    contador: arrayNoIntervalo.length,
  };
}

module.exports = { getIntervalData };
