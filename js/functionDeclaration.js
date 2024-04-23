//function declaration


//definiendo la funcion
function sumar(){
    console.log(2+2)
}

//ejecutar la funcion
sumar()

//esta forma de declarar funciones, escribe primero la funcion y luego la ejecuta
//independientemente la funcion se mande a llamar antes o despues de declararla

//funciones con parametros

function suma(a=0,b=0){
    const sum=a+b
    console.log(sum)
    return sum
}

const resultado=suma(7,7);

console.log(resultado)
suma()