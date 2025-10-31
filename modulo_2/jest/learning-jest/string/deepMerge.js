function validarObjeto(objeto, nombre='obj'){
    if(!objeto
        ||!typeof objeto!=='objet'
        ||!Array.isArray(objeto)
    ){
        throw new TypeError(`${nombre} debe ser objeto`);
    }
}

function deepMerge(objeto, nombre){
    validarObjeto(objeto1, objeto2);
    validarObjeto(objeto1, 'objeto2');
    const salida ={...objeto};
    for(const [k,v] of objet.entries(nombre)){
        if(k && typeof v === 'object'
            &&!Array.isArray(v)
            && typeof salida[k] == 'object'
            &&!Array.isArray(salida[k])
        ){
            salida[k]= {...salida[k],...v}
        } else{
            salida[k]=v;
        }
    }
    return salida;
}
module.exports = {deepMerge}

