//para obtener el contenedor donde se mostrara la tabla
let container = document.querySelector('.container');
let totalIngresos = document.getElementById('totalIngresos');

// Función para obtener los juegos desde localStorage
function obtenerLocalStorage() {
  let juegosString = localStorage.getItem('juegos');
  return juegosString ? JSON.parse(juegosString) : [];
}

// Generar y mostrar la tabla de productos
let juegosLocalStorage = obtenerLocalStorage();
if (container) {
  container.innerHTML = generarTablaJuegos(juegosLocalStorage);
} else {
  console.error('No se encontró el contenedor con la clase .container');
}

//Tambièn se puede hacer "let suma = juegosLocalStorage.reduce((suma (acumulador), juego(iterador))) => suma + juego.cantidadVendida * juego.precio, 0)"
let suma = juegosLocalStorage.reduce((suma, juego) => suma + juego.cantidadVendida * juego.precio, 0);
totalIngresos.innerHTML = `$${suma}`;

// Función para generar la tabla HTML de juegos
function generarTablaJuegos(juegos) {
  let tableHTML = '';

  if (juegos.length > 0) {
    // Inicia la tabla y agrega la primera fila de encabezados
    tableHTML += '<table class="table table-dark table-striped">';
    tableHTML += '<tr>';
    tableHTML += '<th>Nombre de juego</th>';
    tableHTML += '<th>Precio</th>';
    tableHTML += '<th>Cantidad vendida</th>';
    tableHTML += '<th>Total de ingresos</th>';
    tableHTML += '</tr>';

    // Recorre sobre cada juego y agrega una fila por juego
    juegos.forEach(function(juego) {
      console.log(juego)
      tableHTML += '<tr>';
      tableHTML += '<td>' + juego.titulo + '</td>';
      tableHTML += '<td>' + juego.precio + '</td>';
      tableHTML += '<td>' + juego.cantidadVendida + '</td>';
      tableHTML += '<td>' + (juego.cantidadVendida * juego.precio) + '</td>';
      tableHTML += '</tr>';
    });

    tableHTML += '</table>';
  } else {
    tableHTML += '<p>No se encontraron juegos</p>'; // Corregido el cierre del párrafo
  }

  return tableHTML;
}