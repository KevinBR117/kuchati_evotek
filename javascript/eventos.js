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

/* botonoes sidebar */
var itm_inicio = document.getElementById("li_inicio");
var itm_contacto = document.getElementById("li_contacto");
var itm_conocenos = document.getElementById("li_conocenos");
console.log(itm_conocenos);
var itm_prestamo = document.getElementById("li_prestamo");
var itm_acerca = document.getElementById("li_acerca");
var itm_procesos = document.getElementById("li_procesos");
var itm_arrendamiento = document.getElementById("li_arrendamiento");

itm_inicio.addEventListener("click",function (){
    window.location.href = "index.html"
})

itm_contacto.addEventListener("click", function(){
    window.location.href = "contactanos.html"
})

itm_conocenos.addEventListener("click",function(){
    console.log("clicked")
    window.location.href = "conocenos.html"
})

itm_prestamo.addEventListener("click", function () {
    window.location.href = "prestamo.html"
})

itm_acerca.addEventListener("click", function(){
    window.location.href = "acercaDe.html"
})

itm_procesos.addEventListener("click", function () {  
    window.location.href = "procesos.html"
})

itm_arrendamiento.addEventListener("click", function(){
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



