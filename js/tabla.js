"use strict"

document.addEventListener("DOMContentLoaded", 
function(){
    
        let camisetas = [
        {
            "descripcion": "San Antonio Spurs - Emanuel Ginobili",
            "talle": "M,L,XXL",
            "precio": parseInt("15000"),
        },
        {
            "descripcion": "Los Angeles Lakers - Kobe Bryant",
            "talle": "S",
            "precio": parseInt("15000"),
        },
        {
            "descripcion": "Golden State Warriors - Stephen Curry",
            "talle": " M,L",
            "precio": parseInt("15000"),
        },
        {
            "descripcion": "Chicago Bulls - Michael Jordan",
            "talle": "S,M,L",
            "precio": parseInt("15000"),  
        }
    ];

    function mostrarTabla(){
        let tabla = document.getElementById("bodyTable");//Llamo al tbody para insertar la tabla
        tabla.innerHTML = '';
        for(let i=0; i< camisetas.length; i++){
            tabla.innerHTML += ` <tr>
            <td id="1" class="test">${camisetas[i].descripcion}
            <td id="2" class="test">${camisetas[i].talle}
            <td id="3" class="test">${camisetas[i].precio}
            </tr> `;  
        }
    }//inserta en en el DOM el arreglo primero precargado(json) y despues se actualiza en las otras funciones


    mostrarTabla();//muestra la tabla 

    function agregarFilas(event){  
        event.preventDefault();
        let camiseta = {
            "descripcion": document.getElementById("descripcion").value,
            "talle": document.getElementById("talle").value,
            "precio": document.getElementById("precio").value
        };
        camisetas.push(camiseta);//agrega el json con info de los inputs,en la última posicion del arreglo 
        mostrarTabla();//muestra la tabala 
    }


    function borrarTabla(event){
        event.preventDefault();
        camisetas.splice(0);//vacia el arreglo
        mostrarTabla();//muestra el arreglo vacio
    }


    function agregarTresItems(){
        for (let i = 0; i < 3; i++) {
            agregarFilas(event); 
        };
    }//llama a la funcion agregar 3 veces

    document.getElementById("btnAgregar").addEventListener('click', agregarFilas);

    document.getElementById("agregarTres").addEventListener('click', agregarTresItems);

    document.getElementById("btnBorrar").addEventListener('click', borrarTabla);
})