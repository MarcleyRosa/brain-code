function invertString(string) {
    let newString = "";
    for (let index = 0; index < string.length; index++) {
        newString = string[index] + newString;
    }
    return newString;
}

module.exports = {
    invertString,
};
