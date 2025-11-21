const {calcularTotalCafeteria} = require('./consumoCafeteria.js')
describre('calcularTotalCafeteria', () => {
    test('Happy: Calcular correctamente', () => {
        const items =
    [
       {
        nombre: "lapto",
        precioUnutario: "500",
        cantidad: 3
       },
       {
        nombre: "Monitor",
        precioUnutario: "300",
        cantidad: 2
       },
    ]
    const resultado = calcularTotalCafeteria(items, 15);
    expect(resultado).toBe(2415);
});
test('Sad Path: Valores de ingreso ingreso errados', () => {
    const items =
        [
       {
        nombre: "lapto",
        precioUnutario: "500",
        cantidad: 3
       },
       {
        nombre: "Monitor",
        precioUnutario: "300",
        cantidad: 2
       },
    ]
    expect(() => calcularTotalCafeteria(0, 12))
       .toThrow('array invalido');
    expect(() => calcularTotalCafeteria(items, "12"))
       .toThrow('ivaPorcentaje No valido');
    });
});