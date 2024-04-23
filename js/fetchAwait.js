//Fetch con async await

const url = "";

const consumirApi= async ()=>{
    const respuesta= await fetch(url)
    const resultado= await respuesta.json()
    console.log(resultado)
}
