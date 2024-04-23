// Fetch API

const url = "";

const consumirApi=()=>{
    
fetch(url).then((respuesta)=>{
    return respuesta.json()
})
.then((resultado)=>{
    console.log(resultado)
})

}
