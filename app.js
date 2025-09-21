// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para 
// resolver el problema.

console.log("ola comoleba");
let nombres=[];
let amigoSecreto="";

function asignarTextoElemento (elemento,texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo').value.trim();
    if (nombreIngresado == "") {
        alert("Por favor, inserte un nombre");
        //agregarAmigo();
    } else if (nombres.includes(nombreIngresado)) {
            alert("Ese nombre ya está en la lista. Ingresa uno diferente.");
            } 
            else {nombres.push(nombreIngresado);
                 //asignarTextoElemento('#listaAmigos',nombres);
                let listaHTML = " ";
                for (let i = 0;i < nombres.length; i++) {
                    listaHTML += `<li> ${nombres[i]} </li>`
                }
        document.getElementById("listaAmigos").innerHTML = listaHTML;
        console.log(nombres);
    }
    limpiarCaja();  
}

function sortearAmigo() {
    if (nombres.length < 2) {
        asignarTextoElemento('#resultado',"Ingrese por lo menos 2 nombres para realizar el sorteo.");        
    } else {let posicionAmigo = Math.floor(Math.random()*(nombres.length));
        amigoSecreto = nombres[posicionAmigo];
        asignarTextoElemento('#resultado',`Su amigo secreto es: ${amigoSecreto}`);
        console.log(`Su amigo secreto es ${amigoSecreto}`);

    }
}    
