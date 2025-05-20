function printInnerElements(array) {
  if (array.length < 3) {
    console.log("Tamanho do array inválido");
  } else {
    for (let i = 1; i < array.length - 1; i++) {
      console.log(array[i]);
    }
  }
}

module.exports = {
  printInnerElements,
};
