//Comparacion y operador estricto
//Comparar variables == y ===

/**
 * Signo == comparación solo de valores
 * Signo === comparacion de valor y de tipo de dato
 */

const numero1=20
const numero2="20"

if (numero1==numero2) {
    console.log("son iguales")
    
}
else console.log("no son iguales")

const auth=true;
if(auth)
{
    console.log("Estas autenticado")
}

//comparaciones con operadores OR y AND

const saldo=600
const pagar=50033
const tarjeta = false

if (saldo>pagar) {
    console.log("si puedes pagar con tu saldo")
} 
else if(tarjeta)
{
    console.log("si puedes pagar con tu tarjeta")
}
else {
    console.log("No puedes pagar")
}
