function mayoresEdadFilter(edades) {
    if (!Array.isArray(edades) || edades.length === 0) {
        throw new TypeError("arreglo invalido");
    }
    return edades.filter(edad => edad >= 18);
}

module.exports = { mayoresEdadFilter };
