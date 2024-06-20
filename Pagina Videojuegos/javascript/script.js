//script.js
import { juegos } from "./array.js";
import { users } from "./array.js";
import { carritoJuegos } from "./array.js";

let dropdownCuentas = document.getElementById("lista-personas")


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
        cargarCuentas(users);
    });

    //perfiles
    

    function cargarCuentas(array){
        dropdownCuentas.innerHTML = "";
        for (const user of array){
            dropdownCuentas.innerHTML += retornarPersonaHTML(user);
        }
    }

    function retornarPersonaHTML(user) {
        return `<option value="${user.id}">${user.nombre}</option>`;
    }
    
    //Cards de juegos
    let container = document.getElementById("container");

    function cargarJuegos(juegos) {
        container.innerHTML = "";
        juegos.forEach((juego) => {
             container.innerHTML += cardHTML(juego);
        });
    }
         
    function cardHTML(juego) {
        return `
            <div class="juego-card">
                <img src="${juego.imagen}" class="juego"></img>
                <div class="card-body">
                    <p class="titulo">${juego.titulo}</p>
                    <p class="precio">$${juego.precio}</p>
                    <div class="comprar"><button onclick="añadirCarrito(${juego.codigo})">Comprar</button></div>
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

//Carrito
let carrito = document.getElementById('cart');
let carritoList = document.getElementById('carrito-list');
let carritoStorage = obtenerLocalStorage();

function añadirCarrito(id) {
    let indice = carritoStorage.findIndex(juego => juego.codigo === id);

    if (indice !== -1){
        let juego = juegos.find(indice)
        carritoJuegos.push(juego);
    }
}

function eliminarCarrito(id) {
    let indice = carritoStorage.findIndex(juego => juego.codigo === id);

    if (indice !== -1){
        carritoJuegos.splice(indice,1);
    }
}



// Función para filtrar productos por nombre
function filtrarJuegos(){
    let juegosAFiltrar = obtenerLocalStorage();
    let resultado = juegosAFiltrar.filter((juegos) =>
        juegos.genero.toLowerCase().includes(inputBuscar.value.toLowerCase().trim())
);
if (resultado.length !==0 ){
    cargarJuegos(resultado)
}
}