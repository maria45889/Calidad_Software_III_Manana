const {crearEstudiantes} = require('./crearEstudiantes');
describe('Crear Estudiantes',()=>{
    test('Happy Path:', () =>{
        expect(crearEstudiantes(Majo,19)).toBe({
            nombre:Majo,
            edad: 19,
        });
    });
    test('Sad path: nombre / edad invalida', ()=>{
        expect(()=>crearEstudiantes('',19)).toThrow('nombre invalido')
        expect(()=>crearEstudiantes('Ana',-1)).toThrow('edad invalida')
    })
})