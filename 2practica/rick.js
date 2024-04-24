const formulario = document.getElementById('searchForm');
  const entrada = document.getElementById('search');
  const infoP= document.getElementById('infoP');

var images = [
    'https://www.nawpic.com/media/2020/rick-and-morty-4k-nawpic-1.png',
    'https://www.nme.com/wp-content/uploads/2020/04/rick-and-morty-season-4.jpg',
    'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/Rick-and-Morty-Featured-Image.jpg',
    'https://images.nightcafe.studio/jobs/sjFXKwFEyxR28B4SpfxG/sjFXKwFEyxR28B4SpfxG--4--4mrcg_15.625x.jpg?tr=w-1600,c-at_max',
    'https://th.bing.com/th/id/OIP.d-1ynSvALnxz7kFNf9qXAwHaEK?rs=1&pid=ImgDetMain',
    'https://geekculture.co/wp-content/uploads/2021/06/geek-interview-rick-and-morty-season-5-premiere-1200x673.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7cae7766740589.5b20878ae14bf.png',
];

// Obtener un índice aleatorio
var randomIndex = Math.floor(Math.random() * images.length);
// Actualizar el fondo de la página
document.body.style.backgroundImage = 'url(' + images[randomIndex] + ')';


  formulario.addEventListener('submit', async function(evento) {
    evento.preventDefault();
    const nombreP = entrada.value.toLowerCase().trim();

    try {
      const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombreP}`);
      if (!respuesta.ok) {
        throw new Error('¡Personaje no encontrado!');
      }
      const datos = await respuesta.json();
      mostrarInfoP(datos);
    } catch (error) {
      infoP.innerHTML = `<div class="col-md-6 text-center bg-dark"><p class="text-white">${error.message}</p></div>`;
    }
  });

  function mostrarInfoP(datos) {
    const row=datos.results[0];
    const pokemon = `
      <div class="col-md-6 text-center ">
        <img src="${row.image}" alt="${row.name}" class="img-fluid mb-3">
        <div class="text-white bg-dark"> 
        <h2>${row.name}</h2>
        <p><strong>Especie:</strong> ${row.species}</p>
        <p><strong>Estado:</strong> ${row.status}</p>
        <p><strong>Genero:</strong> ${row.gender}</p>
        </div>
    </div>

    `;
    infoP.innerHTML = pokemon;
  }