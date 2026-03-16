//const array = [15, 4, 6, 9, 21, 30, 7];
//const inicio = 15;
//const fim = 30;

function getIntervalData(array, inicio, fim) {
  // escreva seu código aqui
  const obj = {};
  let contador = 0;
  const arrayNoIntervalo = [];
  for (numero of array) {
    if (numero >= inicio && numero <= fim) {
      contador++;
      arrayNoIntervalo.push(numero);
    }
  }
  obj.arrayNoIntervalo = arrayNoIntervalo;
  obj.contador = contador;
  return obj;  //  return { arrayNoIntervalo, contador };
}
//getIntervalData(array, inicio, fim);
  module.exports = {
   getIntervalData,
  }
