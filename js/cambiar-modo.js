"uses strict"

let btn_modo_oscuro = document.querySelector("#btn-modo-oscuro");

btn_modo_oscuro.addEventListener("click", cambiar_modo);

function cambiar_modo(){
    
    document.querySelector("body").classList.toggle("oscuro");
}