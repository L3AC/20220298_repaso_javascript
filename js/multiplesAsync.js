//Fetch con async await multiples llamados

const url = "";
const url2 = "";

const consumirApi= async ()=>{

    const inicio = performance.now();
    const respuesta= await fetch(url)
    const resultado= await respuesta.json()
    console.log(resultado)

    console.log("segundo")
    const respuesta2= await fetch(url2)
    const resultado2= await respuesta.json()
    console.log(resultado2)
    const fin = performance.now();

    console.log(`Ejecución primer async: ${fin - inicio} ms`)
}

const consumirApi2= async ()=>{

    const inicio = performance.now();
const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])
const resultado = await respuesta.json()
const resultado2 = await respuesta2.json()
const fin = performance.now();

console.log(`Ejecución primer async: ${fin - inicio} ms`)
}