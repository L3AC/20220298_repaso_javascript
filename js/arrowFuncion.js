//arrow function

//los arrow function se utilizan bastante con metodos de arreglos 

const sumar = ()=>{
    //console.log(2-1)
}

const sumarr =(n1,n2)=> n1+n2

const sumarr3 =()=> 2+2

//Arrow function con arrays methods map y filter

const tecnologias=["html", "css", "javascript", "react"]

const nuevoArray=tecnologias.map( (tech) =>
{
    if(tech==='html')
    return "GraphQL"
else
return tech

})

const nuevoArray2 = tecnologias.filter((tech)=>{
return tech !== 'react'
})

console.log(nuevoArray2)


//mas array methods 

const numero =[10,20,30];

let arreglo;
//include
//comprobar si un elemento existe en el array
const resultado = tecnologias.includes("React")

//verifica si existe un elemento segun la condicion que se da
//devuelve si al menos uno cumple la condicion true o false
const resultado2= numero.some(numero => numero >15)

//find - devuelve el primer elemento que cumpla la condicion

const resultado3=numero.find(numero => numero >10)

//every - retorna true o false si todos cumplen la condicion

const resultado4=numero.every(numero => numero >15)

//reduce
// para cantidades
//reduce va acumulando en el total el ,0 significa donde empieza
const resultado5=numero.reduce((total, numero)=>{
    numero + total, 0

})

//filter crea un nuevo array en base a una condicion

const resultado6 = tecnologias.filter(tech =>{
    tech==='node.js'
})

const resultado7 = numero.filter(numero =>{
    numero<15
})


//foreach cuando quiera iterar solamente

//map cuando quiera un nuevo arreglo como resultado