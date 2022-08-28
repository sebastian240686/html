let primerNumero = 0;
let segundoNumero = 0;
let sumar;


document.querySelector("#btnCambiar").addEventListener("click",sumarValores);
function sumarValores(){

    primerNumero = Number(document.querySelector("#txtMoneda").value);
    segundoNumero =Number(document.querySelector("#txtCambioDeMoneda").value);

    sumar = primerNumero * segundoNumero;

    console.log(sumar);

    document.querySelector("#Result").innerHTML=sumar;
}