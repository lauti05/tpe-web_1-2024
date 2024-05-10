"uses strict"

let btn_menu = document.querySelector("#boton-menu");

btn_menu.addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("abrir");
}