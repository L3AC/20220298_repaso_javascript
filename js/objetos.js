

//objetos con propiedades y su valor, separados por coma

const producto={
    nombre:"Tablet",
    precio:300,
    disponible:true
}


//para acceder al objeto, ocupados el nombre del objeto seguidod de un punto

//console.log(producto.precio)

//destructuring destructurando de una estructura

//const {nombre, precio, disponible}=producto

//console.log(nombre)

//object literal enhacement

const autenticado=true
const usuario="Wil"

const nuevoObjeto={
    autenticado:autenticado,
    usuario:usuario
}

//si ambas variables se llaman iguales se pueden escribir de la
//siguiente forma

/*
const nuevoObjeto={
    autenticado,
    usuario
} */

console.table(nuevoObjeto)


// Definición de un objeto llamado 'persona'
let persona = {
    nombre: "Juan", // clave: "nombre", valor: "Juan"
    edad: 30,       // clave: "edad", valor: 30
    ciudad: "Madrid", // clave: "ciudad", valor: "Madrid"
    intereses: ["programación", "música", "viajes"], // clave: "intereses", valor: ["programación", "música", "viajes"]
    saludar: function() { // clave: "saludar", valor: una función
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

// Acceder a las propiedades del objeto
console.log(persona.nombre); // Salida: Juan
console.log(persona.edad);   // Salida: 30
console.log(persona.ciudad); // Salida: Madrid
console.log(persona.intereses); // Salida: ["programación", "música", "viajes"]

// Llamar al método 'saludar' del objeto
persona.saludar(); // Salida: Hola, mi nombre es Juan y tengo 30 años.

let persona = {
    nombre: "Juan",
    edad: 30
};

// Modificar el valor de una propiedad usando la notación de puntos
persona.nombre = "María";
persona.edad = 25;

console.log(persona); // Salida: { nombre: "María", edad: 25 }
let persona = {
    nombre: "Juan",
    edad: 30
};

// Modificar el valor de una propiedad usando la notación de corchetes
persona["nombre"] = "María";
persona["edad"] = 25;

console.log(persona); // Salida: { nombre: "María", edad: 25 }
let persona = {
    nombre: "Juan",
    edad: 30
};

// Agregar una nueva propiedad al objeto
persona.ciudad = "Madrid";

console.log(persona); // Salida: { nombre: "Juan", edad: 30, ciudad: "Madrid" }

let persona = {
    nombre: "Juan",
    edad: 30
};

// Eliminar una propiedad del objeto
delete persona.edad;

console.log(persona); // Salida: { nombre: "Juan" }


