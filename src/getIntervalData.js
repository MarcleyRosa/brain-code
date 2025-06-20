function getIntervalData(array, inicio, fim) {
  // escreva seu código aqui
  const novo_array = [];
  let contador = 0;
  let posicao = 0;

  for (let i = 0; i < array.length; i++) {
      if (array[i] >= inicio && array[i] <= fim) {
          novo_array[posicao] = array[i];
          contador++;
          posicao++;
      }
  }
  return {
      arrayNoIntervalo: novo_array,
      contador: contador
  };
}

module.exports = {
getIntervalData
}
// Edson Copque - https://linktr.ee/edsoncopque 
