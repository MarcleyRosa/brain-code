function getIntervalData(array, inicio, fim) {
    const newObject = { arrayNoIntervalo: [], contador: 0 };

    const inicioIndex = array.indexOf(inicio);
    const fimIndex = array.indexOf(fim);

    if (inicioIndex !== -1 && fimIndex !== -1 && inicioIndex <= fimIndex) {
        newObject.arrayNoIntervalo = array.slice(inicioIndex, fimIndex + 1);
        newObject.arrayNoIntervalo = newObject.arrayNoIntervalo.filter((num) => num >= inicio);
        newObject.contador = newObject.arrayNoIntervalo.length;
    }

    return newObject;
}

module.exports = {
    getIntervalData,
};
