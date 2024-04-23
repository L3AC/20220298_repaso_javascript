//Selectores del DOM

const heading=document.querySelector(".heading")

//console.log(heading)
//console.log(heading.textContent)
//console.log(heading.id)


//QuerySelectorAll

const enlaces =document.querySelectorAll(".navegacion a")

//console.log(enlaces)

//para multiples elementos hay que iterar


heading.textContent="nueevo heading"


const inputNombre=document.querySelector("#nombre")

inputNombre.value="Valor por default"


enlaces.forEach(enlace => enlace.textContent="nuevo enlace")
enlaces.textContent="nuevo enlace"


