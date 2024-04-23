
//objetos con propiedades y su valor, separados por coma

const producto={
    nombre:"Tablet",
    precio:300,
    disponible:true
}
//evita que se modifiquen las propiedades del objeto
//Object.freeze(producto)
//deja modificar propiedades existentes del objeto
Object.seal(producto)

//reescribir un valor de una propiedad
producto.nombre="Monitor 2"

//si no existe la propiedad del objeto se añade una nueva
producto.imagen="imagen.jpg"

delete producto.disponible

console.log(producto)
