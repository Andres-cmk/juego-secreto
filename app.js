var numerosGenerados = [];
let intentos = 1;
const reload = document.getElementById("reiniciar");
var numeroMaximo = 10;
var numeroSecreto = generarNumeroAleatorio();


reload.addEventListener("click", (_) => {
    numerosGenerados.push(numeroSecreto);
    intentos = 1;
    limpiarTexto();
    numeroSecreto = generarNumeroAleatorio();
    document.getElementById("iniciar").disabled = false;
});

function limpiarTexto(){ document.querySelector("#numeroUsuario").value = ""; }


function recargarPagina(){
    location.reload();
}


function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function logica(){
    
    if(document.getElementById("iniciar").value === ""){
        asignarTexto("p","por favor ingresa un numero");   
        document.getElementById("reiniciar").disabled = true;
    }

    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    console.log("Numero secreto: " + numeroSecreto);

    if(numeroUsuario === numeroSecreto){
        asignarTexto("p","Ese era el numero correcto!");
    } else if(numeroSecreto > numeroUsuario){
        asignarTexto("p","El numero secreto es mayor.");
    }else if(numeroSecreto < numeroUsuario){
        asignarTexto("p","el numero secreto es menor.");
    }

    intentos++;
    limpiarTexto();
    if(intentos > 3){
        asignarTexto("p","Se te acabaron los intentos");
        document.getElementById("iniciar").disabled = true;
        return;
    }
}


function generarNumeroAleatorio(){
    
    let numeroGenerado = parseInt(Math.random() * numeroMaximo + 1);
    
    if(numerosGenerados.length === numeroMaximo){
        asignarTexto("p","Ya se sortearon todos los numeros posibles");
    }
    console.log(numerosGenerados);
    if(numerosGenerados.includes(numeroGenerado)){
        return generarNumeroAleatorio();
    }
    return numeroGenerado;
}


asignarTexto("h1","Bienvenido al juego del dev");
asignarTexto("p","Elige un numero a azar!");