function buscarPalabras(frase,palabra){
    if(!frase
        ||!palabra 
        ||!typeof frase=='string'
        ||!typeof palabra=='string'
    ){
        throw new TypeError("frase invalida");
    }
    return frase.includes(palabra);
}
module.exports = {buscarPalabras}
