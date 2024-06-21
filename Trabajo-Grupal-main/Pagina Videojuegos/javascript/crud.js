let container = document.getElementsByClassName(".contenedor");

import { juegos } from './array.js';

    window.addEventListener('load', function () {
        // Obtener los productos almacenados en localStorage
        let juegosAlmacenados = obtenerLocalStorage();
      
        // Si hay productos en el localStorage
        if (juegosAlmacenados.length > 0) {
          // Cargar los productos en la página
          cargarJuegos(juegosAlmacenados)
        } else {
          // De lo contrario, guardar los productos que tenemos en variables.js en el localStorage
          guardarLocalStorage(juegos)
          // Cargar los productos en la página
          cargarJuegos(juegos)
        }
    });

    // Función para convertir rutas de imagen relativas
      function convertirRuta(ruta) {
        if (ruta.startsWith("./")) {
          ruta="./../" + ruta.substring(2);
        }
        return ruta;
      }
      
      function cargarJuegos(array) {
         container.innerHTML = "";
         array.forEach((juego) => {
             container.innerHTML += cardHTML(juego);
         });
    }
      
      function cardHTML(juego) {
         return `<div class="juego-card">
                    <img src="${convertirRuta(juego.imagen)}" class="juego"></img>
                    <div class="card-body">
                        <p class="titulo">${juego.titulo}</p>
                        <p class="precio">$${juego.precio}</p>
                        <div class="acciones">
                          <button onclick="eliminarJuego(${juego.codigo})">Eliminar</button>
                          <button onclick="modificarJuego(${juego.codigo})">Modificar</button>
                        </div>
                    </div>
                </div>`;

    }

    function guardarLocalStorage(juegos) {
        localStorage.setItem('juegos', JSON.stringify(juegos));
      }
    
    function obtenerLocalStorage() {
        let juegosString = localStorage.getItem('juegos');
        return juegosString ? JSON.parse(juegosString) : [];
      }
    
    //funcion para eliminar juego
    function eliminarJuego(id) {
    let gameStorage = obtenerLocalStorage();

    let indice = gameStorage.findIndex(juego => juego.codigo === id);

    if (indice !== -1) {
      gameStorage.splice(indice, 1);
      guardarLocalStorage(gameStorage);
      cargarJuegos(gameStorage);
  
      alert("Producto eliminado correctamente");
    } else {
      alert("No se encontró el producto");
    }
    };
   
    //funcion modificar juego
    function modificarJuego(codigo){
      let juegos = obtenerLocalStorage();
      let juego = juegos.find(p => p.codigo === codigo);
      if(juego){
        document.getElementById('imagen-actual').src = convertirRuta (juego.imagen);
        document.getElementById('titulo').value = juego.titulo;
        document.getElementById('precio').value = juego.precio;
        document.getElementById('juego-form').dataset.codigoJuego = codigo; // Establecer el código del producto
      }
    }

