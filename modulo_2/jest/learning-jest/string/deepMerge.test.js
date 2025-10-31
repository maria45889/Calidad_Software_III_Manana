const {buscarPalabras} = require('./buscarPalabras');

describe('buscar Palabras',()=>{
    test('Happy Path: buscar Palabras', () =>{
        const response = buscarPalabras(
            'hola mundo jest','Jest'
        )
    expect(response).toBe(true);
    const response2 = buscarPalabras(
        'hola mundo jest','Jesty'
    )
    expect(response2).toBe(false);
});
    test('Sad path:  ERROR',
        ()=>{
        expect(()=>buscarPalabras(null,'jest')).toThrow('frase invalida');
        expect(()=>buscarPalabras('',344)).toThrow('frase invalida');
    });
});