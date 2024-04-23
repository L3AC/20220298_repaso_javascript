const autenticado=true

//ternarios 

autenticado ? console.log("usuario autenticado")
 : console.log("usuario no autenticado") 


 //doble ternario

 const saldo=600
 const pagar=400
 const tarjeta =true

 saldo > pagar ? 
 console.log("Puedes pagar") : 
 tarjeta ? 
 console.log("Puedes pagar con tarjeta")
 : console.log("Definitivamente no puedes pagar")