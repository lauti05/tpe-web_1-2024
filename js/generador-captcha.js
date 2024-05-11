"use strict";

console.log("Bienvenido");

//Declaro variables
let random = Math.floor((Math.random()*90000)+10000);
let form_contacto = document.querySelector("#formulario-contacto");
form_contacto.addEventListener('submit', validar);
let captcha = document.querySelector("#confirmacion");
captcha.value = random;
let solucion = document.querySelector("#solucion");

// funcion para validar formulario
function validar(e) {
    e.preventDefault();
    if(captcha.value === solucion.value){
        document.querySelector("#mensaje-de-comprobacion").innerHTML = "Captcha valido";
    }
    else{
        document.querySelector("#mensaje-de-comprobacion").innerHTML = "Captcha invalido";
    }
}
