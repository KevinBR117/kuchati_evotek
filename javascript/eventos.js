$(document).ready(function () {
    
    //animacion logotipo
    var elemento = $("#logo_superpuesto");
    setTimeout(function () {
        elemento.fadeOut('swing');

    }, 1000);


});
var numero = 0;
console.log(numero);

var reloj = window.setInterval(function () {
    document.getElementById("numeroVar").innerHTML = numero;
    if (numero < 25) {
        numero++;
    }
    else {
        clearInterval(reloj);
    }


}, 1000);




