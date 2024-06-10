//script.js

document.addEventListener("DOMContentLoaded", function() {
    //perfiles
    let profiles = document.getElementById("dropdown-users");

    dropdown(users)

    function dropdown(users) {
        profiles.innerHTML = "";
        for (const user of users) {
            profiles.innerHTML += `<li><a class="dropdown-item" href="#">${user}</a></li>`;
        }
    }
    
    //Buscador
    let container = document.querySelector(".container");

    document.addEventListener('keyup', element => {
        element.target.matches('#buscador');
        for (const juego of juegos) {
            if (juego.title.includes(element.target.value)) {
                
            }
        }
    })

    /*function buscar(array) {
        let existe = false;
        for (const e of array) {
            if (e.includes(element.target.value)) {
                
            }
        }
    }*/

     //Cards de juegos

     cargaJuegos(juegos);

    function cargaJuegos(juegos) {
         container.innerHTML = "";
         juegos.forEach((juego) => {
             container.innerHTML += cardHTML(juego);
         });
    }
         
    function cardHTML(juego) {
         return `<div class="juego-card">
             <img src="${juego.imagen}" class="juego"></img>
             <div class="card-body">
                 <p class="titulo">${juego.titulo}</p>
                 <p class="precio">$${juego.precio}</p>
                 <button class="boton-carrito">Añadir al carrito</button>
             </div>
         </div>`;
    }
 
    //Carrito
    let carrito = [];
    let listaCarrito = document.querySelector("carrito-list");
    let totalDOM = document.getElementById("total")
    let botonVaciar = document.getElementById("boton-vaciar");
    let botonCarrito = document.querySelectorAll("boton-carrito");

    botonCarrito.setAttribute('marcador', juego.codigo);
    botonCarrito.addEventListener('click', anadirAlCarrito);
    
    function anadirAlCarrito(event) {
        carrito.push(event.target.getAttribute('marcador'))
        renderCarrito();
    }

    function renderCarrito() {
        listaCarrito.textContent = '';
        let carritoNoDuplicates = [... new Set(carrito)];
        carritoNoDuplicates.forEach((juego) => {
            let item = juegos.filter((itemJuegos) => {
                return itemJuegos.codigo === parseInt(juego);
            });
            carrito.innerHTML= "";
            carrito.innerHTML += `<li class="list-item, text-right">${item[0].titulo} - $${item[0].precio}</li>
                                <button class="btn">X</button>`;
            let botonX = document.querySelectorAll("btn");
            botonX.addEventListener("click", borrarItem);
        });
        totalDOM.textContent = calcTotal();
    }

    function borrarItem(event) {
        let id = event.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        })

        renderCarrito();
    }

    function calcTotal() {
        return carrito.reduce((total, item) => {
            let miItem = juegos.filter((juego) => {
                return juego.codigo === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        carrito = [];
        renderCarrito();
    }

    botonVaciar.addEventListener('click', vaciarCarrito);
    renderCarrito();

    //Categorias
    let categorias = document.querySelector('categorias');

    function filtrarCategorias(array, categoria) {
        for (let i = 0; i < array.length; i++) {
            return array[i].filter(juego => juego.genero === categoria);
        }
    }
});