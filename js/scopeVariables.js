//Scope o alcance de las variables

//Existe de forma global
const precio =300

function unaf(){
    //Existe solamente dentro del alcance de la funcion
    //osea sus llaves
    //de forma local en la funcion
    const precio=0
    console.log(precio)
}

unaf()