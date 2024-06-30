import { juegos, generos } from "./array.js";
import { Juego } from "./clases.js";

let container = document.getElementById('contenedor');
let generosOption = document.getElementById('genero');

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
        generosOption.innerHTML = "";
        for (const item of array){
            generosOption.innerHTML += retornarGenerosHTML(item);
        }
    }

    function retornarGenerosHTML(item) {
        return `<option value="${item}">${item}</option>`;
    }

    // Función para convertir rutas de imagen relativas
      function convertirRuta(ruta) {
        if (ruta.startsWith("./")) {
          ruta="./../" + ruta.substring(1);
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
          modifyBtn.className = "btn btn-outline-primary";
          modifyBtn.onclick = () => modificarJuego(index);

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Eliminar';
          deleteBtn.className = "btn btn-outline-danger"
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
    function modificarJuego(index) {
      let juegos = obtenerLocalStorage();
      let juego = juegos[index];
    
      if (juego) {
        document.getElementById('imagen').value = ''; // Limpiar el campo de imagen si es necesario
        document.getElementById('titulo').value = juego.titulo;
        document.getElementById('precio').value = juego.precio;
        document.getElementById('genero').value = juego.genero;
        document.getElementById('Formulario').dataset.codigoJuego = juego.codigo; // Establecer el código del juego en el formulario
      }
    }
    

    function nuevoCodigo(){
      let juegos = JSON.parse(localStorage.getItem('juegos' || '[]'));
      let codigos = juegos.map((juego) => juego.codigo);
      return Math.max(...codigos) + 1;
    };

// Evento submit para el formulario
document.getElementById('Formulario').addEventListener("submit", function(event) {
  event.preventDefault();
  let juegos = obtenerLocalStorage();

//Obtener los valores de los campos del formulario
  const imagen = document.querySelector('#imagen').value.trim(); //elimina cualquier espacio en blanco al principio y al final del valor obtenido de los campos del formulario.
  const titulo = document.querySelector('#titulo').value.trim();
  const precio = document.querySelector('#precio').value.trim();
  const genero = document.getElementById('genero').value.trim();
//Obtener el código del producto desde el atributo 'data-codigo-producto' del formulario.
  const codigo = parseInt(this.dataset.codigoJuego);

  let juego = new Juego(imagen, titulo, codigo, precio, genero);

  if (this.dataset.codigoJuego !== undefined){
    let indice = juegos.findIndex((j) => j.codigo === juego.codigo);
    juegos[indice] = juego;
    alert("Producto modificado correctamente");
  }else{
    juego.codigo = nuevoCodigo();
    juegos.push(juego);
  }
  guardarLocalStorage(juegos);
  actualizarJuegos();
  //limpiar el formulario
  this.reset();
  //eliminar el codigoJuego del dataset
  delete this.dataset.codigoJuego;
});

