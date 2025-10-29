const{mayoresEdad} = require ('./mayoresEdad');

describe('Edades Mayor de Edad', ()=>{
    test('Happy path:[18,24,30,40] mayor de edad',() =>{
        expect(mayoresEdad([18,24,30,40])).toBe(18);
    });
    test('Happy path:[] mayores de edad ',() =>{
        expect(mayoresEdad([])).toEqual([]);
    });
    test('Sad path:edad invalida',() =>{
        expect(()=>mayoresEdad([-1,18 ])).toThrow('edad invalida');
        expect(()=>mayoresEdad('arreglo')).toThrow('edad invalida');
    });
})






