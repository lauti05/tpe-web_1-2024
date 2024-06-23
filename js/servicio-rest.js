"use strict"

const URL = 'https://666c7e1549dbc5d7145e31b5.mockapi.io/camiseta/';
let carrito = [];

//ni bien carga el sitio busco las camisetas
obtener_carrito();

let btn_modificar = document.querySelector("#btn-modificar");
btn_modificar.addEventListener("click", recuperar_id);

let btn_eliminar = document.querySelector("#btn-eliminar");
btn_eliminar.addEventListener("click",  eliminar_ult_compra)

//obtengo los camisetas del servicio
async function obtener_carrito() { //ver nombre para variable promesa
    try {
        let promesa = await fetch(URL); //por defecto fetch tiene el metodo GET asi que no lo especifico
        
        if (promesa.ok) {
            let camisetas = await promesa.json();
            mostrar_carrito(camisetas);
            carrito = camisetas;
        }
        else{
            throw new Error('Response not ok');
        }
    } 
    catch (promesa) {
       document.querySelector("#msj-error").innerHTML = "Error al cargar el carrito";
    }
}

//asigno un event listener al form que se usa para comprar una camiseta
let form_compra = document.querySelector("#form-compra"); 
form_compra.addEventListener('submit', agregar_compra); 


//funcion asincrona para agregar una camiseta al carrito
async function agregar_compra(e) {
    e.preventDefault(); //para q no se recargue la pagina

    let datos_compra = new FormData(form_compra); //capturo los datos del formulario de compra

    let compra = { //creo un json con los datos del form
        nombre: datos_compra.get("opc-camisetas"),
        cantidad: parseInt(datos_compra.get("cantidad")),
        talle: datos_compra.get("talle")
    };

    try {
        let promesa = await fetch(URL, {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(compra)
        });

    }
    catch{
        throw new Error('Error agregando compra');
    }
}

async function eliminar_ult_compra(){
    let ultimo = carrito.length-1;
    let id = (carrito[ultimo].id).toString();
    try {
        let promesa = await fetch(URL+id, {method: 'DELETE'});
    }
    catch{
        throw new Error('Error eliminando compra');
    }
}

function recuperar_id(){
    let id_borrar = -1;
    let form_modificar = document.querySelector(".form-modificar");
    form_modificar.classList.toggle('mostrar');

    let datos_form = new FormData(form_modificar);

    for (const item of carrito){
        document.querySelector("#opc-carrito").innerHTML += "<option>"+item.nombre+"</option>";
        /*if (datos_form.get("opc-carrito") === item.id)
            id_borrar = item.id;*/
    }       
    

    let nueva_compra = {nombre: datos_form.get("opc-carrito"),
        cantidad: datos_form.get("cantidad"),
        talle: datos_form.get("talle")
    };
    
    modificar_compra(id_borrar, nueva_compra);

}

async function modificar_compra(id, compra_modif){

    try {
        let promesa = await fetch(URL, {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(compra_modif)
        });

    }
    catch{
        throw new Error('Error modificando compra');
    }
}

//modifico el html para imprimir la tabla que simula el carrito
function mostrar_carrito(productos){
    let tabla_carrito = document.querySelector("#cuerpo-tabla-carrito");
    tabla_carrito.innerHTML = '';
    for (const item of productos) {
        tabla_carrito.innerHTML += "<tr>" +   
                                            "<td>" + item.nombre + "</td>" + 
                                            "<td>" + item.talle + "</td>" +
                                            "<td>" + item.cantidad + "</td>" +
                                    "</tr>";
        
    }
}