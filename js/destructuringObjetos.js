
//Destructuring de 2 o mas objetos

const producto={
    nombre:"Tablet",
    precio:300,
    disponible:true
}

const cliente ={
    nombre:"wilfredo",
    premium: true
}


const {nombre, precio, disponible}=producto
console.log(nombre, precio, disponible)

//pone alias a una propiedad que ya exista
const {nombre: nombreCliente, premium}=cliente
console.log(nombreCliente, premium)