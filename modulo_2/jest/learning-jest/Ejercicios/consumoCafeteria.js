function calcularTotalCafeteria (items, ivaPorcentaje) {
    if(!Array.isArray(items))
        throw new TypeError("array invalido");
    if(!ivaPorcentaje || !typeof ivaPorcentaje !=="number") {
        throw new TypeError("ivaPorcentaje No valido");
    }

    let subtotal=0
    for(let item of items) {
        const subtotalItem = item.precioUnutario*item.cantifaf;
        subtotal += subtotalItem;
    }
    const iva =subtotal * (ivaPorcentaje/100);
    const total = subtotal + iva;
    return total;
}

module.exports = {calcularTotalCafeteria};

const items =
[
    {
        nombre: "lapto",
        precioUnutario: "500",
        cantidad: 3
    },
    {
        nombre: "lapto",
        precioUnutario: "500",
        cantidad: 2
    },
]

const resultado = calcularTotalCafeteria(items, "ee");
console.log("reslultado : ",  resultado);
    