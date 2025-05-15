function invertElements(array) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.unshift(array[index]);
    }
    return newArray;
}

module.exports = {
    invertElements,
};
