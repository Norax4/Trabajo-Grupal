import { User } from './clases.js';
import { Juego } from './clases.js';

export let carrito = [];

export const juegos =[
    new Juego("./images/lords of the fallen.jpeg","Lords of the Fallen", 1, 1200, "RPG"),
    new Juego("images/sao game.jpeg","Sword Art Online", 2, 450, "RPG"),
    new Juego("images/forza motor.jpeg","Forza Motorsport", 3, 350, "Racing"),
    new Juego("images/overpass2.jpeg","Overpass", 4, 300, "Racing"),
    new Juego("images/motoGP.jpeg", "MotoGP24", 5, 500, "Racing"),
    new Juego("images/horizon.jpeg" ,  "Horizon Zero Dawn", 6, 450, "RPG"),
    new Juego("images/hogwarts.jpeg" ,  "Hogwarts legacy",7, 600, "RPG"),
    new Juego("images/biomutant.jpeg" , "Biomutant", 8,  750, "RPG"),
    new Juego("images/all star.jpeg" ,  "DreamWorks All Stars",9, 400, "Racing"),
    new Juego("images/dungeons.jpeg",  "Dungeons", 10, 780, "RPG"),
    new Juego("images/pes2021.jpeg",  "Football 2021", 11, 900, "Sports"),
    new Juego("images/forzah5.jpeg",  "Forza horizon", 12, 600, "Racing"),
    new Juego("images/gta5.jpeg",  "Grand therft auto 5",  13, 600, "Action"),
    new Juego("images/mafia.jpeg",  "Mafia edicion definitiva", 14, 650, "Action"),
    new Juego("images/avengers.jpeg",  "Marvel Avengers", 15,850, "Action"),
    new Juego("images/metro.jpeg", "Metro Exodus",  16, 500, "Action"),
    new Juego("images/naruto.jpeg", "Naruto",  17,  500, "Adventure"),
    new Juego("images/spiderman.jpeg",  "Spider Man",  19,  800, "Action"),
    new Juego("images/tlou1.jpeg","The last of us",21, 450, "Action"),
    new Juego("images/sims4.jpeg","The Sims 4",22, 900, "Simulation"),
    new Juego("images/alaskan road truckers.jpeg", "Alaskan Road Truckers", 24,400, "Racing"),
    new Juego("images/skylines2.jpeg", "Cities Skylines II", 25, 600, "Simulation"),
    new Juego("images/hotweels unleashed.jpeg","Hot Wheels", 27, 900, "Racing"),
    new Juego("images/smurfs2.jpeg", "The Smurfs 2", 28, 850, "Adventure"),
    new Juego("images/aliens dark descent.jpeg", "Aliens Dark Descent", 29, 750, "Action"),
    new Juego("images/gylt.jpeg", "GYLT",  30, 800, "Adventure"),
    new Juego("images/polbridge3.jpeg", "Poly Bridge 3",  31, 750, "Simulation"),
    new Juego("images/ratchetclank.jpeg","Ratchet and Clank", 32, 650, "Adventure"),
    new Juego("images/wanted dead.jpeg",  "Wanted Dead",  34, 600, "Action"),
    new Juego("images/isle of man.jpeg", "Isle Of Man", 35, 850, "Racing"),
    new Juego("images/mc legends.jpeg", "Minecraft Legends", 36, 900, "Adventure"),
    new Juego("images/gollum.jpeg", "Gollum", 37,  650, "Adventure")
    ];

export const users = [
    new User(0, "Ana"),
    new User(1, "Jose"),
    new User(2, "Maria")
    ];

export const generos = ["Racing", "Action", "Simulation", "Adventure", "Puzzle game", "Horror", "Sports", "RPG"];
