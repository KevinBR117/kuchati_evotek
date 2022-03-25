$(document).ready(function () {

    //animacion logotipo
    var elemento = $("#logo_superpuesto");
    setTimeout(function () {
        elemento.fadeOut('swing');

    }, 1000);
});

/* animacion para sidebar */

var btnToggle = document.getElementById("bar");
console.log(btnToggle);

btnToggle.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active")
});


var itm_logo = document.getElementById("btn_logo")

/* botonoes sidebar */
var itm_inicio = document.getElementById("itm_inicio");
var itm_nosotros = document.getElementById("itm_nosotoros");
var itm_tramite = document.getElementById("itm_tramite");
var itm_servicios = document.getElementById("itm_servicios");

itm_logo.addEventListener("click", function () { 
    window.location.href = "index.html"
})


itm_inicio.addEventListener("click",function (){
    window.location.href = "inicio.html"
})

itm_nosotros.addEventListener("click", function(){
    window.location.href = "nosotros.html"
})

itm_tramite.addEventListener("click",function(){
    console.log("clicked")
    window.location.href = "tramite.html"
})

itm_servicios.addEventListener("click", function () {
    console.log("boton servicios")
    window.location.href = "arrendamiento.html"
})


/* animacion pagina conocenos */
var numero = 0;
console.log(numero);
/* if (document.getElementById("numeroVar") != null) { */

    var reloj = window.setInterval(function () {
        document.getElementById("numeroVar").innerHTML = numero;
        if (numero < 25) {
            numero++;
        }
        else {
            clearInterval(reloj);
        }

    }, 1000);
/* } */