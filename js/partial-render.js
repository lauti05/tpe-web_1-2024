"use strict"

cargar_inicio();

async function cargar_inicio(){
    let contenido = document.querySelector(".contenido-partial-render");
    contenido.innerHTML = "<h1>Cargando...</h1>";
    try{
        let promesa = await fetch("inicio.html");
        if (promesa.ok){
            promesa.text().then(text => contenido.innerHTML = text);
        }
        else {
            contenido.innerHTML = "<h1>Error cargando el contenido</h1>"
        }
    }
    catch{
        contenido.innerHTML = "<h1>Error en la conexion con el servidor</h1>"
    }
}

document.querySelector(".logo-pag").addEventListener("click", cargar_inicio);
document.querySelector("#nav-inicio").addEventListener("click", cargar_inicio);

async function cargar_productos(){
    let contenido = document.querySelector(".contenido-partial-render");
    contenido.innerHTML = "<h1>Cargando...</h1>";
    try{
        let promesa = await fetch("productos.html");
        if (promesa.ok){
            promesa.text().then(text => contenido.innerHTML = text);
        }
        else {
            contenido.innerHTML = "<h1>Error cargando el contenido</h1>"
        }
    }
    catch{
        contenido.innerHTML = "<h1>Error en la conexion con el servidor</h1>"
    }
}

document.querySelector("#nav-prod").addEventListener("click", cargar_productos);

async function cargar_promociones(){
    let contenido = document.querySelector(".contenido-partial-render");
    contenido.innerHTML = "<h1>Cargando...</h1>";
    try{
        let promesa = await fetch("promociones.html");
        if (promesa.ok){
            promesa.text().then(text => contenido.innerHTML = text);
        }
        else {
            contenido.innerHTML = "<h1>Error cargando el contenido</h1>"
        }
    }
    catch{
        contenido.innerHTML = "<h1>Error en la conexion con el servidor</h1>"
    }
}

document.querySelector("#nav-promociones").addEventListener("click", cargar_promociones)

async function cargar_carrito() {
    let contenido = document.querySelector(".contenido-partial-render");
    contenido.innerHTML = "<h1>Cargando...</h1>";
    try{
        let promesa = await fetch("carrito.html");
        if (promesa.ok){
            promesa.text().then(text => contenido.innerHTML = text);
        }
        else {
            contenido.innerHTML = "<h1>Error cargando el contenido</h1>"
        }
    }
    catch{
        contenido.innerHTML = "<h1>Error en la conexion con el servidor</h1>"
    }
}

document.querySelector("#nav-carrito").addEventListener("click", cargar_carrito)

async function cargar_contacto() {
    let contenido = document.querySelector(".contenido-partial-render");
    contenido.innerHTML = "<h1>Cargando...</h1>";
    try{
        let promesa = await fetch("contacto.html");
        if (promesa.ok){
            promesa.text().then(text => contenido.innerHTML = text);
        }
        else {
            contenido.innerHTML = "<h1>Error cargando el contenido</h1>"
        }
    }
    catch{
        contenido.innerHTML = "<h1>Error en la conexion con el servidor</h1>"
    }
}

document.querySelector("#nav-contacto").addEventListener("click", cargar_contacto);


