$(document).ready(function(){
    $("#enviar").click(function(event){
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var edad = $("#edad").val();
        var direccion = $("#direccion").val();

        var contieneNumerosNombre = /\d/.test(nombre);
        var contieneNumerosApellido = /\d/.test(nombre);

        if(nombre == ""){
        $("#mensaje1").fadeIn();
        event.preventDefault();
        }else if(contieneNumerosNombre){
            $("#mensaje1").fadeIn();
            event.preventDefault();
        }else{
             $("#mensaje1").fadeOut();
             if(apellido == ""){
               $("#mensaje2").fadeIn();
               event.preventDefault();
               }else if(contieneNumerosApellido){
                    $("#mensaje2").fadeIn();
                    event.preventDefault();
            }else{
                $("#mensaje2").fadeOut();
                   if(edad == ""){
                     $("#mensaje3").fadeIn();
                     event.preventDefault();
               }else{
                    $("#mensaje3").fadeOut();
                       if(direccion == ""){
                        $("#mensaje4").fadeIn();
                        event.preventDefault();
                    }else{
                        $("#mensaje4").fadeOut();
                    }
                }
        }
    }
});
});