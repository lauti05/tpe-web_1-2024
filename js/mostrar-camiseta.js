"uses strict"
const RUTA_BASE = "./images/camisetas/"; //direccion comun que tiene todas las imagenes de las camisetas

let select_camisetas = document.querySelector("#sel-camisetas")

select_camisetas.addEventListener("change", mostrar_imagen);

function mostrar_imagen() {
    let form_compra_camisetas = document.querySelector("#form-compra");
    let datos_compra = new FormData(form_compra_camisetas);
    let camiseta = datos_compra.get("opc-camisetas").toString();
    let imagen_camiseta = document.querySelector("#img-camiseta");

    switch (camiseta) {
        case ("Argentina '94"):
            imagen_camiseta.src = RUTA_BASE + "argentina94.png";
            break;
        case ("Batistuta - Fiorentina"):
            imagen_camiseta.src = RUTA_BASE + "batistuta9.png"
            break;

        case ("Boca '97"):
            imagen_camiseta.src = RUTA_BASE + "boca97.png";
            break;
        case ("Independiente '97/'98"):
            imagen_camiseta.src = RUTA_BASE + "independiente-retro.png"
            break;
        case ("Kaka - Milan"):
            imagen_camiseta.src = RUTA_BASE + "kaka22.png";
            break;
        case ("Racing '91"):
            imagen_camiseta.src = RUTA_BASE + "racing-retro.png"
            break;
        case ("Riquelme - Villareal"):
            imagen_camiseta.src = RUTA_BASE + "riquelme-villareal-frente.png"
            break;

        case ("River '96"):
            imagen_camiseta.src = RUTA_BASE + "river-96-frente.png"
            break;

        case ("Ronaldinho - Barcelona"):
            imagen_camiseta.src = RUTA_BASE + "ronaldinho-barcelona-frente.png"
            break;

        case ("Ronaldo - Brasil"):
            imagen_camiseta.src = RUTA_BASE + "ronaldo-brasil-frente.png"
            break;

        case ("San Lorenzo '85"):
            imagen_camiseta.src = RUTA_BASE + "sanlorenzo-retro.png"
            break;

        case ("Zidane - Francia"):
            imagen_camiseta.src = RUTA_BASE + "zidane-francia-frente.png"
            break;
    }
}