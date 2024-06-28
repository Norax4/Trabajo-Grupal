//script.js
import { juegos, users, carrito as arrayCarrito, generos } from './array.js';

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
    let userBtn = document.getElementById('user-btn');
    let divPersonas = document.getElementById('personas');
    
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
    
    userBtn.addEventListener('click', function(){
        divPersonas.style.display = 'block';
    })

    //Cards de juegos
    let container = document.getElementById("Container");

    function cargarJuegos(juegos) {
        container.innerHTML = "";
        juegos.forEach((juego) => {
            let divCard = document.createElement('div');
            divCard.className = 'juego-card';
            divCard.innerHTML += `<img src="${juego.imagen}" class="juego"></img>`;

            let divBody = document.createElement('div');
            divBody.className = 'card-body';
            divBody.innerHTML += `<p class="titulo">${juego.titulo}</p>
                                <p class="precio">$${juego.precio}</p>`;
            
            let addBtn = document.createElement('button');
            addBtn.className = 'compraBtn';
            addBtn.textContent = 'Añadir al Carrito';
            addBtn.onclick = () => añadirAlCarrito(juego.codigo);

            divBody.appendChild(addBtn);
            divCard.appendChild(divBody);
            container.appendChild(divCard);
        });
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
let carritoDiv = document.getElementById('carrito');
let carritoStorage = obtenerLocalStorage();

carrito.addEventListener('click', function(){
    carritoDiv.style.display = 'block';
});

function añadirAlCarrito(id){
    let game = carritoStorage.find((game) => game.codigo === id);
    arrayCarrito.push(game);
    let totalJuegos = document.getElementById('totalJuegos');
    totalJuegos.innerHTML = arrayCarrito.length;

    let totalCompra = document.getElementById('totalCompra');
    let suma = 0;
    arrayCarrito.forEach(juego =>{
        suma += juego.precio;
    });

    if (arrayCarrito.length > 3){
        suma *= 0.85;
    }
    totalCompra.textContent = suma;
}

let btnComprar = document.getElementById('comprar');

btnComprar.addEventListener('click', function(){
    let juegos = obtenerLocalStorage();
    arrayCarrito.forEach((juego) =>{
        let indice = juegos.findIndex((j) => j.codigo === juego.codigo);
        juegos[indice].cantidadVendida += 1;
    });
    guardarLocalStorage(juegos);
    arrayCarrito.splice(0, arrayCarrito.length);
    alert('Gracias por su compra');
    let totalJuegos = document.getElementById('totalJuegos');
    let totalCompra = document.getElementById('totalCompra');
    totalJuegos.innerHTML = '0';
    totalCompra.innerHTML = '0';
})


// Función para filtrar productos por nombre

cargarGeneros(generos);

    function cargarGeneros(array){
        dropdownFiltro.innerHTML = `<option value="">Todos los Juegos</option>`;
        for (const item of array){
            dropdownFiltro.innerHTML += retornarGenerosHTML(item);
        }
    }

    function retornarGenerosHTML(item) {
        return `<option value="${item}">${item}</option>`;
    }

function filtrarJuegos(){
    let dropValue = dropdownFiltro.value;
    let juegosFiltrados = [];
    for (const juego of juegos){
        if (juego.genero === dropValue){
            juegosFiltrados.push(juego);
        }
    };
    cargarJuegos(juegosFiltrados);
}