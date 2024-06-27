import { juegos } from "./array.js";
import { Juego } from "./clases.js";

let container = document.getElementById('contenedor');
let generos = document.getElementById('genero');

    window.addEventListener('load', function () {
        // Obtener los productos almacenados en localStorage
        let juegosAlmacenados = obtenerLocalStorage();
      
        // Si hay productos en el localStorage
        if (juegosAlmacenados.length > 0) {
          // Cargar los productos en la página
          cargarJuegos(juegosAlmacenados);
        } else {
          // De lo contrario, guardar los productos que tenemos en variables.js en el localStorage
          guardarLocalStorage(juegos);
          // Cargar los productos en la página
          cargarJuegos(juegos);
        }
      });

    cargarGeneros(generos);

    function cargarGeneros(array){
        generos.innerHTML = "";
        for (const item of array){
            generos.innerHTML += retornarGenerosHTML(item);
        }
    }

    function retornarGenerosHTML(item) {
        return `<option value="${item}">${item}</option>`;
    }

    // Función para convertir rutas de imagen relativas
      function convertirRuta(ruta) {
        if (ruta.startsWith("./")) {
          ruta="./../" + ruta.substring(2);
        }
        return ruta;
      }
      
      // Función para cargar productos en la interfaz
      function cargarJuegos(array) {
        container.innerHTML = "";
        array.forEach((juego, index) => {
          const divCard = document.createElement('div');
          divCard.className = 'juego-card';
          divCard.innerHTML += cardHTML(juego);

          const divAction = document.createElement('div');
          divAction.className = 'acciones';

          const modifyBtn = document.createElement('button');
          modifyBtn.textContent = 'Modificar';
          modifyBtn.className = 'modify-button';
          modifyBtn.onclick = () => modificarJuego(index);

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Eliminar';
          deleteBtn.className = 'delete-button';
          deleteBtn.onclick = () => eliminarJuego(index);

          divAction.appendChild(deleteBtn);
          divAction.appendChild(modifyBtn);
          divCard.appendChild(divAction);
          container.appendChild(divCard);
         });
        }
      
      function cardHTML(juego) {
          return `<img src="${convertirRuta(juego.imagen)}" class="juego"></img>
                    <div class="card-body">
                        <p class="titulo">${juego.titulo}</p>
                        <p class="precio">${juego.precio}</p>
                    </div>`

    }

    function guardarLocalStorage(juegos) {
        localStorage.setItem('juegos', JSON.stringify(juegos));
      }
    
    function obtenerLocalStorage() {
        let juegosString = localStorage.getItem('juegos');
        return juegosString ? JSON.parse(juegosString) : [];
      }

    function actualizarJuegos(){
      let juegos = obtenerLocalStorage();
      cargarJuegos(juegos);
    }
    
    //funcion para eliminar juego
    function eliminarJuego(index) {
    let gameStorage = obtenerLocalStorage();

    if (index !== -1) {
      gameStorage.splice(index, 1);
      guardarLocalStorage(gameStorage);
      actualizarJuegos();
  
      alert("Producto eliminado correctamente");
    } else {
      alert("No se encontró el producto");
    }
    };
   
    //funcion modificar juego
    function modificarJuego(index){
      let juegos = obtenerLocalStorage();
      let juego = juegos[index];

      if(juego){
       /*document.getElementById('imagen').value =  */    //actualiza los campos del formulario con los valores actuales del juego
        document.getElementById('titulo').value = juego.titulo;
        document.getElementById('precio').value = juego.precio;
        document.getElementById('genero').value = juego.genero;
        document.getElementById('Formulario').dataset.codigoJuego = codigo; // Establecer el código del producto
      }
    }

    function nuevoCodigo(){
      let juegos = JSON.parse(localStorage.getItem('juegos' || '[]'));
      let ids = juegos.map((juego) => juego.id);
      return Math.max(...ids) + 1;
    };

// Evento submit para el formulario
document.getElementById('Formulario').addEventListener("submit", function(event) {
  event.preventDefault();
  let juegos = obtenerLocalStorage();

//Obtener los valores de los campos del formulario
  const imagen = document.querySelector('#imagen').value.trim(); //elimina cualquier espacio en blanco al principio y al final del valor obtenido de los campos del formulario.
  const titulo = document.querySelector('#titulo').value.trim();
  const precio = document.querySelector('#precio').value.trim();
//Obtener el código del producto desde el atributo 'data-codigo-producto' del formulario.
  const codigo = this.dataset.codigoJuego;

let juego = new Juego(imagen, titulo, codigo, precio);


//limpiar el formulario
this.reset();
//eliminar el codigoJuego del dataset
delete this.dataset.codigoJuego;
});

