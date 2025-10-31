const {buscarPalabras} = require('./buscarPalabras');

describe('buscar Palabras',()=>{
    test('Happy Path: buscar Palabras', () =>{
        const response = buscarPalabras(
            'hola mundo Jest','Jest'
        )
    expect(response).toBe(true);
    const response2 = buscarPalabras(
        'hola mundo Jest','Jesty'
    )
    expect(response2).toBe(false);
});
    test('Sad path:  ERROR',
        ()=>{
        expect(()=>buscarPalabras(null,'jest')).toThrow('frase invalida');
        expect(()=>buscarPalabras('',344)).toThrow('frase invalida');
    });
});