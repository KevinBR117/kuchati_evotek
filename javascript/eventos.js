$(document).ready(function () {

    //animacion logotipo
    var elemento = $("#logo_superpuesto");
    setTimeout(function () {
        elemento.fadeOut('swing');

    }, 1000);
});

/* animacion para sidebar */

var btnToggle = document.getElementById("bar");
/* console.log(btnToggle); */

btnToggle.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active")
});


var itm_logo = document.getElementById("btn_logo")

/* botonoes sidebar */
var itm_inicio = document.getElementById("itm_inicio");
var itm_nosotros = document.getElementById("itm_nosotros");
var itm_tramite = document.getElementById("itm_tramite");
var itm_servicios = document.getElementById("itm_servicios");
var itm_contacto = document.getElementById("itm_contacto");

itm_logo.addEventListener("click", function () { 
    console.log("clicked");
    window.location.href = "index.html"
})

itm_inicio.addEventListener("click",function (){
    window.location.href = "inicio.html"
})

itm_nosotros.addEventListener("click", function(){
    window.location.href = "nosotros.html"
})

itm_tramite.addEventListener("click",function(){
    window.location.href = "proceso.html"
})

itm_servicios.addEventListener("click", function(){
    console.log("boton servicios")
    window.location.href = "arrendamiento.html"
})
 itm_contacto.addEventListener("click", function(){
     window.location.href = "contactanos.html"
 })

/* animacion pagina nosotros */
var numero = 0;
if (document.getElementById("numeroVar") != null) { 

    var reloj = window.setInterval(function () {
        document.getElementById("numeroVar").innerHTML = numero;
        if (numero < 25) {
            numero++;
        }
        else {
            clearInterval(reloj);
        }

    }, 250);
} 