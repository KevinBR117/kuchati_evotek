$(document).ready(function(){
    console.log("estamos listos")
    
    //animacion logotipo
    var elemento = $("#logo_superpuesto");
    setTimeout(function(){
        elemento.fadeOut('swing');
        
    },3000);
   /*  elemento.remove(); */
    
    // columna inicio
    
    /* setTimeout(function() {
        elemento.css("justify-content","start").css("align-items","flex-start");
        elemento.removeClass("container-fluid p-5");
        elemento.children("#imagen_logo").css("width","15%").css("height","auto").css("transform", "translateX(25%)")
        elemento.children("#imagen_logo").appendTo("#logo_super_columna");
        elemento.fadeIn("swing");
    }, 5000); */

    //desplegar contenido del boton conocenos
    var detalle_contenido = $("#detalle_contenido");
    
    var btn_conocenos = $("#btn_conocenos");
    btn_conocenos.hover(function () {
            detalle_contenido.css("z-index","1");
        }, function () {
            detalle_contenido.css("z-index","-1")
        }
    );

});

