function formatPhoneNumber(numbers) {
  // escreva seu código aqui
  // Verifica se o array tem exatamente 11 elementos
  if (numbers.length !== 11) {
      return 'Array com tamanho incorreto.';
  }

  // Verifica se todos os números estão entre 0 e 9
  for (let num of numbers) {
      if (num < 0 || num > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
      }
  }

  // Verifica se algum número se repete 3 vezes ou mais
  let countNumbers = {};
  for (let num of numbers) {
      countNumbers[num] = (countNumbers[num] || 0) + 1;
      if (countNumbers[num] >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
      }
  }

  // Formata o número de telefone no padrão (XX) XXXXX-XXXX
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}

module.exports = { formatPhoneNumber };
