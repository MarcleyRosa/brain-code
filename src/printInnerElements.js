function printInnerElements(array) {
  if (array.length <= 2 || array.length === 0) {
    console.log("Tamanho do array inválido");
    return;
  }

  for (let index = 1; index < array.length - 1; index += 1) {
    console.log(array[index]);
  }
}

module.exports = {
  printInnerElements,
};
