$(document).ready(function(){
    console.log("estamos listos")
    
    //animacion logotipo
    var elemento = $("#logo_superpuesto");
    setTimeout(function(){
        elemento.fadeOut('swing');
        
    },1000);

    //desplegar contenido del boton conocenos
    var detalle_contenido = $("#detalle_contenido");
  
    var btn_conocenos = $("#btn_conocenos");
    btn_conocenos.hover(function () {
            detalle_contenido.css("z-index","1");
        }, function () {
            detalle_contenido.css("z-index","-1")
        }
    );
    //desplegar contenido del boton prestamo
    var detalle_contenido_1 = $("#detalle_contenido_1");
  
    var btn_prestamo = $("#btn_prestamo");
    
    btn_prestamo.hover(function () {
            detalle_contenido_1.css("z-index","1 !important");
        }, function () {
            detalle_contenido_1.css("z-index","-1")
        }
    );


    $("#btn_acercaDe").hover(function () { 
        $("#detalle_contenido_2").css("z-index","1");   
        }, function(){
            (this).css("z-index","1");
        }
    );

    


});


