function findMaximum(array) {
    let numMax = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > numMax) {
            numMax = array[index];
        }
    }
    return numMax;
}

module.exports = {
    findMaximum,
};
