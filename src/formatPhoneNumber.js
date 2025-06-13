function formatPhoneNumber(numbers) {
  if (!numbers || numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  const countMap = {};
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (typeof num !== "number" || num < 0 || num > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    if (countMap[num] === undefined) {
      countMap[num] = 1;
    } else {
      countMap[num]++;
      if (countMap[num] >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }

  let ddd = `(${numbers[0]}${numbers[1]})`;
  let parte1 = "";
  for (let j = 2; j <= 6; j++) parte1 += numbers[j];
  let parte2 = "";
  for (let k = 7; k <= 10; k++) parte2 += numbers[k];
  return `${ddd} ${parte1}-${parte2}`;
}

module.exports = {
  formatPhoneNumber,
};
