//unir 2 objetos

const producto={
    nombre:"Tablet",
    precio:300,
    disponible:true
}

const cliente ={
    nombre:"wilfredo",
    premium: true
}

//const nuevoObjeto=Object.assign(producto, cliente) no muy recomendado
//console.log(nuevoObjeto)

//spread operator
//const nuevoObjeto2={...producto, ...cliente} esta forma reescribe tambien
//pero se reescriben las propiedades que se llaman igual
console.log(nuevoObjeto2)

const nuevoObjeto2={producto: {...producto}, cliente:{...cliente}}


