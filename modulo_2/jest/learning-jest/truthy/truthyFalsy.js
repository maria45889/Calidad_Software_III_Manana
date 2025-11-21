function esTruthy(valor) {
    return !!valor; //coercopm voolena
}

function retornarDedault(valor, defecto = 'N/A') {
    return valor ? valor : defecto; // usa falsy
}

function reuereTextoNoVacio(txt) {
    if(typeof txt !== 'string' || !txt.trim()) {
        throw new TypeError('texto requerido');
        
    }
}