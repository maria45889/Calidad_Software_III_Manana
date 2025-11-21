function buscarAlumno(alunmnos, nombre) {
    if(!Array.isArray(alunmnos))
        throw new TypeError('alumnis debe ser un array');
    if(typeof nombre !=='string' || !nombre.trim())
        throw new TypeError('')
}