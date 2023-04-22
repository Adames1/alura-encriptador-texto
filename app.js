//SE CAPTURA EL BOTON ENCRIPTAR CON EL EVENTO CLICK

const botonEncriptar = document.querySelector(".boton-encriptar");

botonEncriptar.addEventListener("click", function encriptar() {

    let textoIngresado = document.querySelector(".input-entrada").value;

    let texto = textoIngresado.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    let inputSalida = document.querySelector(".input-salida").innerHTML = texto;

    let botonCopiar = document.querySelector(".boton-copiar");
    botonCopiar.classList.add("display");

})

const botonDesencriptar = document.querySelector(".boton-desencriptar");

botonDesencriptar.addEventListener("click", function desencriptar() {

    let textoIngresado = document.querySelector(".input-entrada").value;

    let texto = textoIngresado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    let inputSalida = document.querySelector(".input-salida").innerHTML = texto;

    let botonCopiar = document.querySelector(".boton-copiar");
    botonCopiar.classList.add("display");

})

let botonCopiar = document.querySelector(".boton-copiar");

botonCopiar.addEventListener("click", function copiar() {

    let copiarTexto = document.querySelector(".input-salida");

    navigator.clipboard.writeText(copiarTexto.textContent);

})