$(document).ready(function(){
    $("#enviar").click(function(event){
        var numero = $("#numero").val();

        if(numero == ""){
            $("#mensaje1").fadeIn();
            event.preventDefault();
        }else{
            $("#mensaje1").fadeOut();
        }
    });
});