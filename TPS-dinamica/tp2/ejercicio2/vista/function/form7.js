$(document).ready(function(){
    $("#enviar").click(function(event){
        var numero1 = $("#numero1").val();
        var numero2 = $("#numero2").val();

        if(numero1 == ""){
            $("#mensaje1").fadeIn();
            event.preventDefault();
        }else{
            $("#mensaje1").fadeOut();
            if(numero2 == ""){
               $("#mensaje2").fadeIn();
               event.preventDefault();
        }else{
            $("#mensaje2").fadeOut();
        }
       }
    });
});