const { mayoresEdadFilter } = require('./mayoresEdadFilter');

describe('mayoresEdadFilter', () => {

    test('Happy path: [10, 18, 25, 14, 30] devuelve [18,25,30]', () => {
        expect(mayoresEdadFilter([10, 18, 25, 14, 30])).toEqual([18, 25, 30]);
    });
    test('Happy path: [5, 7, 10] devuelve [] (ninguno mayor)', () => {
        expect(mayoresEdadFilter([5, 7, 10])).toEqual([]);
    });
    test('Sad path: arreglo vacío', () => {
        expect(() => mayoresEdadFilter([])).toThrow('arreglo invalido');
    });
    test('Sad path: no es un arreglo', () => {
        expect(() => mayoresEdadFilter("hola")).toThrow('arreglo invalido');
    });
})
