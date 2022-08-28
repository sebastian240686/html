let nombre;
let apellido;
let edad;
let datos;

document.querySelector("#btningresar").addEventListener("click",ingresoDeDatos);

function ingresoDeDatos(){

nombre = document.querySelector("#txtnombre").value;
apellido = document.querySelector("#txtapellido").value;
edad = Number(document.querySelector("#txtedad").value);



datos= "\nNombre:"+nombre +"\nApellido:"+apellido+"\nEdad:"+edad;

document.querySelector("#datos").innerHTML=datos;


}