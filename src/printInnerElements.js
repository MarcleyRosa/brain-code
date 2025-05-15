function printInnerElements(array) {
    if (array.length >= 3) {
        array.pop();
        array.shift();
        for (let index = 0; index < array.length; index++) {
            console.log(array[index]);
        }
    } else {
        console.log('Tamanho do array inválido');
    }
}

module.exports = {
    printInnerElements,
};
