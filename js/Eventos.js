//Eventos en JavaScript 


//click


const heading = document.querySelector('.heading')

heading.addEventListener('click', function()
{
   heading.textContent="nuevo heading"
})

const enlaces = document.querySelectorAll(".navegacion a")

enlaces.forEach(enlace =>{
    enlace.addEventListener("click", ()=>{
        console.log("Diste clic en un enlace")
    })
})