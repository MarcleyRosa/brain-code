function removeDuplicates(arr) {
  const result = []; // o result contem valores unicoos

  for (const item of arr) {
    if (!result.includes(item)) {
      //aqui verifica se ele foi adicionado
      result.push(item);
    }
  }

  return result;
}

module.exports = { removeDuplicates };
