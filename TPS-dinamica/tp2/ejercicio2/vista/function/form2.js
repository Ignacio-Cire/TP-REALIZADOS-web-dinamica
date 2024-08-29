$(document).ready(function(){
    $("#enviar").click(function(event){
        var lunes = $("#lunes").val();
        var martes = $("#martes").val();
        var miercoles = $("#miércoles").val();
        var jueves = $("#jueves").val();
        var viernes = $("#viernes").val();

        if(lunes == ""){
        $("#mensaje1").fadeIn();
        event.preventDefault();
        }else{
             $("#mensaje1").fadeOut();
             if(martes == ""){
               $("#mensaje2").fadeIn();
                event.preventDefault();
            }else{
                $("#mensaje2").fadeOut();
                   if(miercoles == ""){
                     $("#mensaje3").fadeIn();
                     event.preventDefault();
               }else{
                    $("#mensaje3").fadeOut();
                       if(jueves == ""){
                        $("#mensaje4").fadeIn();
                        event.preventDefault();
                    }else{
                        $("#mensaje4").fadeOut();
                        if(viernes == ""){
                           $("#mensaje5").fadeIn();
                           event.preventDefault();
                        }else{
                            $("#mensaje5").fadeOut();
                        }
                    }
                }
        }
    }
});
});