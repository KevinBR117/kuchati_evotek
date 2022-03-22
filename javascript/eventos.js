$(document).ready(function () {

    //animacion logotipo
    var elemento = $("#logo_superpuesto");
    setTimeout(function () {
        elemento.fadeOut('swing');

    }, 1000);
});

/* animacion para sidebar */
console.log("data")
var btnToggle = document.getElementById("bar");
console.log(btnToggle);

btnToggle.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active")
});

/* animacion pagina conocenos */
var numero = 0;
console.log(numero);
if (document.getElementById("numeroVar") != null) {

    var reloj = window.setInterval(function () {
        document.getElementById("numeroVar").innerHTML = numero;
        if (numero < 25) {
            numero++;
        }
        else {
            clearInterval(reloj);
        }

    }, 1000);
}



