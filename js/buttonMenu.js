"uses strict"

let btn_menu = document.querySelector("#boton-menu");

btn_menu.addEventListener("click", mostrarmenu);

function mostrarmenu(){
    document.querySelector(".menu").classList.toggle("abrir");
}