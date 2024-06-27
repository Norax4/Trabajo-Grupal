export class Juego {
    constructor(imagen,titulo,codigo,precio,genero,cantidadVendida){
        this.imagen = imagen;
        this.titulo = titulo;
        this.codigo = codigo;
        this.precio = precio;
        this.genero = genero;
        this.cantidadVendida = cantidadVendida || 0;
    }
}

export class User {
    constructor(id,nombre,biblioteca = null,carrito = null) {
        this.id = id;
        this.nombre = nombre;
        if (biblioteca != null){
            this.biblioteca = biblioteca;
        } else {
            this.biblioteca = "No hay juegos todavia.";
        };
        if (carrito != null){
            this.carrito = carrito;
        } else {
            this.carrito = "No hay compras todavia.";
        };
    }
}


