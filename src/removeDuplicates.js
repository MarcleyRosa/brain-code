function removeDuplicates(array) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (!newArray.includes(array[index])) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}

module.exports = {
    removeDuplicates,
};
