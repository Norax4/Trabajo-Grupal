import { User } from './clases.js';
import { Juego } from './clases.js';

export let carrito = [];

export const juegos =[
    new Juego("./images/lords of the fallen.jpeg","Lords of the Fallen", 1, 1200, "RPG", 0),
    new Juego("./images/sao game.jpeg","Sword Art Online", 2, 3450, "RPG", 0),
    new Juego("./images/forza motor.jpeg","Forza Motorsport", 3, 3350, "Racing", 0),
    new Juego("./images/overpass2.jpeg","Overpass", 4, 2300, "Racing", 0),
    new Juego("./images/motoGP.jpeg", "MotoGP24", 5, 3500, "Racing", 0),
    new Juego("./images/horizon.jpeg" ,  "Horizon Zero Dawn", 6, 2450, "RPG", 0),
    new Juego("./images/hogwarts.jpeg" ,  "Hogwarts legacy",7, 2600, "RPG", 0),
    new Juego("./images/biomutant.jpeg" , "Biomutant", 8,  3750, "RPG", 0),
    new Juego("./images/all star.jpeg" ,  "DreamWorks All Stars",9, 4400, "Racing", 0),
    new Juego("./images/dungeons.jpeg",  "Dungeons", 10, 2780, "RPG", 0),
    new Juego("./images/pes2021.jpeg",  "Football 2021", 11, 2900, "Sports", 0),
    new Juego("./images/forzah5.jpeg",  "Forza horizon", 12, 3600, "Racing", 0),
    new Juego("./images/gta5.jpeg",  "Grand therft auto 5",  13, 2600, "Action", 0),
    new Juego("./images/mafia.jpeg",  "Mafia edicion definitiva", 14, 3650, "Action", 0),
    new Juego("./images/metro.jpeg", "Metro Exodus",  16, 2500, "Action", 0),
    new Juego("./images/naruto.jpeg", "Naruto",  17,  2500, "Adventure", 0),
    new Juego("./images/spiderman.jpeg",  "Spider Man",  19,  3800, "Action", 0),
    new Juego("./images/tlou1.jpeg","The last of us",21, 3450, "Action", 0),
    new Juego("./images/sims4.jpeg","The Sims 4",22, 3900, "Simulation", 0),
    new Juego("./images/skylines2.jpeg", "Cities Skylines II", 25, 2600, "Simulation", 0),
    new Juego("./images/hotweels unleashed.jpeg","Hot Wheels", 27, 2900, "Racing", 0),
    new Juego("./images/smurfs2.jpeg", "The Smurfs 2", 28, 3850, "Adventure", 0),
    new Juego("./images/aliens dark descent.jpeg", "Aliens Dark Descent", 29, 3750, "Action", 0),
    new Juego("./images/gylt.jpeg", "GYLT",  30, 4800, "Adventure", 0),
    new Juego("./images/polbridge3.jpeg", "Poly Bridge 3",  31, 2750, "Simulation", 0),
    new Juego("./images/ratchetclank.jpeg","Ratchet and Clank", 32, 3650, "Adventure", 0),
    new Juego("./images/wanted dead.jpeg",  "Wanted Dead",  34, 3600, "Action", 0),
    new Juego("./images/isle of man.jpeg", "Isle Of Man", 35, 4850, "Racing", 0),
    new Juego("./images/mc legends.jpeg", "Minecraft Legends", 36, 2900, "Adventure", 0),
    new Juego("./images/gollum.jpeg", "Gollum", 37,  650, "Adventure", 0)
    ];
    
export const users = [
    new User(0, "Ana"),
    new User(1, "Jose"),
    new User(2, "Maria")
    ];

export const generos = ["Racing", "Action", "Simulation", "Adventure", "Puzzle game", "Horror", "Sports", "RPG"];
