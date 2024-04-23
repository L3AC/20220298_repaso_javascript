//iteracion de arreglos 

const tecnologias=["html", "css", "javascript", "react", "node.js"]


//foreach - Acceder a cada elemento del array
const arrayForeach=tecnologias.forEach(function(tech){
   return (tech)
})

//map - permite crear un nuevo array
const arraryMap=tecnologias.map(function(tech){
    return (tech)
})

//con for of

const arrayFor=[]
for (const tech of tecnologias) {
    arrayFor.push(tech)
}

console.log(arrayFor)
console.log(arrayForeach)
console.log(arraryMap)

//informacion Arrayrs
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Salida: [1, 2, 3, 4]

let arr = [1, 2, 3];
let ultimoElemento = arr.pop();
console.log(arr); // Salida: [1, 2]
console.log(ultimoElemento); // Salida: 3

let arr = [1, 2, 3];
let primerElemento = arr.shift();
console.log(arr); // Salida: [2, 3]
console.log(primerElemento); // Salida: 1

let arr = [2, 3];
arr.unshift(1);
console.log(arr); // Salida: [1, 2, 3]

let arr = [2, 3];
arr.unshift(1);
console.log(arr); // Salida: [1, 2, 3]

let arr = [2, 3];
arr.unshift(1);
console.log(arr); // Salida: [1, 2, 3]

let arr = [1, 2, 3, 4, 5];
let subArray = arr.slice(1, 4); // Extrae desde el índice 1 hasta el 3
console.log(subArray); // Salida: [2, 3, 4]

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    console.log(element);
}

let arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
    console.log(element);
});

let arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
    console.log(element);
});

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(function(element) {
    return element * 2;
});
console.log(newArr); // Salida: [2, 4, 6, 8, 10]

let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter(function(element) {
    return element > 2;
});
console.log(filteredArr); // Salida: [3, 4, 5]

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(sum); // Salida: 15





