import { barcelona , roma , paris , londres } from './ciudades.js'

//obtener elementos del DOM
let enlaces =  document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let ParrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//agregar evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click' , function () {
        //Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
//agregar la clase "active" al enlace actual
this.classList.add('active')

//obtener contenido correpondiente segun el enlace
let contenido = obtenerContenido(this.textContent)

    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    ParrafoElemento.innerHTML = contenido.parrafo
    precioElemento.innerHTML = contenido.precio
    });
});
//Funcion para traer la info correcta desde ciudades.js
function obtenerContenido (enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}