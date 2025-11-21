function crearUsuario(nombre,rol) {
    if (typeof nombre !== 'string' || typeof rol !== 'string') {
        throw new TypeError('nombre y rol debem ser string');
    }
    return {
        nombre, 
        rol,
        activo: true,
        creado: new Date().toISOString() };
 }

 function obtenerPerfil(usuario) {
    if(!usuario || typeof usuario !== 'object')
        throw new TypeError('usuario invalido');
    const { nombre, rol,activo } = usuario;
    return { nombre, rol,activo };
    
 }

 function comprarusuario(u1 , u2) {}
   if(!u1 || !u2)  