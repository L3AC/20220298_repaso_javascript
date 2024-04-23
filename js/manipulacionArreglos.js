

//operaciones con arreglos

const tecnologias=["html", "css", "javascript", "react"]

//añadir elementos al array
//tecnologias.push("hola") //añade al final
//tecnologias.unshift("Inicio")//agrega al inicio

//añadiendo al arreglo nuevos valores sin modificar el arreglo original

//const nuevoArreglo = [ 'Nuevo elemento', ...tecnologias,]


//eliminar elementos del array

//tecnologias.pop() //elimina el ultimo elemento
//tecnologias.shift()//elimina el primer elemento

//eliminar elementos a aprtir de su indice y cuantos mas
//posicion especifica
//tecnologias.splice(2, 1)

//filter 

/*
const nuevoArreglo = tecnologias.filter(function(tech){
    return tech === "html"
})*/


//reemplazar elementos del array

const nuevoArray=tecnologias.map(function(tech)
{
    if(tech==='html')
    return "GraphQL"
else
return tech
})

console.table(tecnologias)
console.table(nuevoArray)