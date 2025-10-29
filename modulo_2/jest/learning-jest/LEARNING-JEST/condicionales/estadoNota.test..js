const { estadoNota } = require('./estadoNota');

describe('estadoNota', () => {
    test('Happy path: 8 Aprobado', () => {
        expect(estadoNota(8)).toBe('Aprovado');
    });

    test('Happy path: 5 Supletorio y 2 Reprobado', () => {
        expect(estadoNota(5)).toBe('Supletorio'); 
        expect(estadoNota(2)).toBe('Reprobado'); 
    });

    test('Sad path: Nota invalida', () => {
        expect(() => estadoNota(-1)).toThrow('Nota invalida');
        expect(() => estadoNota('10')).toThrow('Nota invalida');
        expect(() => estadoNota(50)).toThrow('Nota invalida');

    });
});
