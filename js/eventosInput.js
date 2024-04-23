//Eventos en inputs 


const inputNombre = document.querySelector(".nombre")


inputNombre.addEventListener('input', function(e){
   // console.log("Escribiendo...")
    console.log(e.target.value)
})

const inputPasword=document.querySelector('.contra')

inputPasword.addEventListener('input', function(e)
{
    inputPasword.type='text'
    setTimeout(() => {
        inputPasword.type='password'
    }, 100);

})