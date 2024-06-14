"use strict";

//Genero el captcha 
let nro_random = Math.floor((Math.random() * 90000) + 10000);
let captcha = document.querySelector("#captcha");
captcha.innerHTML = nro_random;

//Añado el event listener para cuando se envie el formulario
let form_contacto = document.querySelector("#formulario-contacto");
form_contacto.addEventListener('submit', validar_captcha);

//Valido el captcha
function validar_captcha(e) {
    /*let respuesta = document.querySelector("#rta-captcha");
    e.preventDefault(); //para que no se refresque la pagina


    if(captcha.innerHTML === respuesta.value.toString()){ //convertimos respuesta a string para la comparacion porque no pudimos convertir captcha.innerHTML a number y que ande bien
        document.querySelector("#mensaje-de-comprobacion").innerHTML = "Captcha válido";
    }
    else{
        document.querySelector("#mensaje-de-comprobacion").innerHTML = "Captcha inválido";
    }*/

    e.preventDefault();
    let data_formulario = new FormData(form_contacto);

    let rta_captcha = parseInt(data_formulario.get("rta-captcha"));

    if (rta_captcha === nro_random){
        document.querySelector("#mensaje-de-comprobacion").innerHTML = "Captcha válido";
    }
    else{
        document.querySelector("#mensaje-de-comprobacion").innerHTML = "Captcha inválido";
    }


    
}

