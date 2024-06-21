//script.js
import { juegos, users } from './array.js';


let dropdownCuentas = document.getElementById("lista-personas");
let dropdownFiltro = document.getElementById("juegos-filtro");

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

    //perfiles
    
    cargarCuentas(users);

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
    let container = document.getElementById("Container");

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

function guardarLocalStorage(array) {
    localStorage.setItem('juegos', JSON.stringify(array));
  }

function obtenerLocalStorage() {
    let juegosString = localStorage.getItem('juegos');
    return juegosString ? JSON.parse(juegosString) : [];
  }

//Carrito
let carrito = document.getElementById('cart');
let carritoList = document.getElementById('carrito-list');
let carritoStorage = obtenerLocalStorage();

function renderCarrito(){
    let usuario = users.find(dropdownCuentas.value);
    carritoList.innerHTML = "";
    for (const item of usuario.carrito){
        carritoList.innerHTML += `<li>${item.titulo} - ${item.precio} <button onclick="eliminarDeCarrito(${item.codigo}>X</button></li>`;
    }
}

function añadirAlCarrito(id){
    let game = carritoStorage.find((game) => game.codigo === id);
    let personaSeleccionada = dropdownCuentas.value;
    for (let user of users) {
    if (user.id == personaSeleccionada) {
      // Agregamos al carrito de la persona el producto
      user.carrito.push(game);
    }
    }
}

function eliminarDeCarrito(id){
    let user = dropdownCuentas.value;
    let indice = user.carrito.findIndex(juego => juego.codigo === id);
    if (indice !== -1) {
        user.carrito.splice(indice, 1);

    }
}



// Función para filtrar productos por nombre


function filtrarJuegos(){
    let dropValue = dropdownFiltro.value;
    if (juegos.genero === dropValue){
        
    }
}