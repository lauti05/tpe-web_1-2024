"use strict"

const URL = 'https://666c7e1549dbc5d7145e31b5.mockapi.io/camiseta/';

//ni bien carga el sitio busco las camisetas
obtener_carrito();

//funcion asincrona para obtener los productos del carrito (GET)
async function obtener_carrito() { //ver nombre para variable promesa
    try {
        let promesa = await fetch(URL); //por defecto fetch tiene el metodo GET asi que no lo especifico
        
        if (promesa.ok) {
            let camisetas = await promesa.json();
            mostrar_carrito(camisetas);
        }
        else{
            throw new Error('Response not ok');
        }
    } 
    catch {
        throw new Error('Error obteniendo el carrito');
    }
}

//modifico el html para imprimir la tabla que simula ser el carrito 
function mostrar_carrito(productos){
    document.querySelector(".msj-exito").innerHTML = "";
    let tabla_carrito = document.querySelector("#cuerpo-tabla-carrito");
    tabla_carrito.innerHTML = '';
    for (const item of productos) { //imprimo los productos y agrego codigo html para modificar y eliminar cada elemento de la tabla
        tabla_carrito.innerHTML += "<tr>" +   
                                            "<td>" + item.nombre + "</td>" + 
                                            "<td>" + item.talle + "</td>" +
                                            "<td>" + item.cantidad + "</td>" +
                                            "<td>" + 
                                                "<button name='"+ item.id + "'" + " class='btn-eliminar'>Eliminar</button>" +
                                            "</td>"+
                                           "<td>"+    
                                                "<form id='form-modif' name='"+ item.id + "'" + ">" +
                                                    "</select>"+
                                                    "Talle <select name='talle'>"+
                                                       "<option>XL</option>"+
                                                        "<option>L</option>"+
                                                        "<option>S</option>"+
                                                   "</select>"+
                                                    "Cantidad <input name='cantidad' type='number' min='1' required>"+
                                                    "<input type='submit' class='form-eliminar' value='Modificar'>"+
                                                "</form>"
                                            "</td>" + 
                                    "</tr>";       
    }


//agrego eventListeners a cada uno de los botones para eliminar y modificar
    let botones_eliminar = document.querySelectorAll(".btn-eliminar");
    for (const boton of botones_eliminar)
        boton.addEventListener("click", eliminar_compra);

    let forms_modificar = document.querySelectorAll("#form-modif")
    for (const formulario of forms_modificar){
        formulario.addEventListener("submit", modificar_compra);
    }
}

//funcion asincrona para eliminar un producto (DELETE)
async function eliminar_compra(e) {
    e.preventDefault();
    let id = e.target.getAttribute("name");
    try {
        let promesa = await fetch(URL+id, {method: 'DELETE'});

        if(promesa.ok){
            obtener_carrito();
            document.querySelector(".msj-exito").innerHTML = "Producto eliminado"
        }
        else{
            throw new Error('Response not ok');
        }
    }
    catch{
        throw new Error('Error eliminando compra');
    }
}

//funcion asincrona para modificar un producto (PUT)
async function modificar_compra(e) {
    e.preventDefault();

    let id = e.target.getAttribute("name");

    let datos_modif = new FormData(e.target);
    let compra_nueva = {
        cantidad: datos_modif.get("cantidad"),
        talle: datos_modif.get("talle")
    };

    try {
        let promesa = await fetch(URL+id, {
            method: 'PUT',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(compra_nueva)
        });
        if (promesa.ok) {
            obtener_carrito();
        }
    }
    catch{
        throw new Error('Error modificando compra');
    }
}

//asigno un event listener al form que se usa para comprar una camiseta
let form_compra = document.querySelector("#form-compra"); 
form_compra.addEventListener('submit', agregar_compra); 

//funcion asincrona para agregar una camiseta al carrito (POST)
async function agregar_compra(e) {
    e.preventDefault(); //para q no se recargue la pagina

    let datos_compra = new FormData(form_compra); //capturo los datos del formulario de compra

    let compra = { //creo un json con los datos del form
        nombre: datos_compra.get("opc-camisetas"),
        cantidad: datos_compra.get("cantidad"),
        talle: datos_compra.get("talle")
    };

    try {
        let promesa = await fetch(URL, {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(compra)
        });
        
        if (promesa.ok){
            document.querySelector(".msj-exito"). innerHTML = "Añadido al <a href='carrito.html'>carrito</a>";
        }else{
            throw new Error('Response not ok');
        }


    }
    catch{
        throw new Error('Error agregando compra');
    }
}