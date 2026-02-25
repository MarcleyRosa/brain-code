function printInnerElements(array) {
  // escreva seu código aqui
  if (array.length < 3) {
    console.log('Tamanho do array inválido');
    return;
}

array.shift(); 
array.pop();   

for (let i = 0; i < array.length; i++) {
    console.log(array[i]); 
}
}

module.exports = {
  printInnerElements
}

//A função `printInnerElements` recebe um array como parâmetro e deve imprimir todos os elementos menos o primeiro e o ultimo.
//Se o array tiver um tamanho menor que 3 deve imprimir a seguinte mensagem 'Tamanho do array inválido'

//Exemplo: se a função receber o array [1, 5, 10, 12], o retorno deverá ser [5, 10].

//O que será testado:

//Retorne o valor ['JavaScript'] se a função receber ['HTML', 'JavaScript', 'CSS'];

//Retorne o valor [10, 5, 20] se a função receber [8, 10, 5, 20, 6] ;

//Retorne o valor 'Tamanho do array inválido' se a função receber [4, 7].