$(document).ready(function(){
    $("#enviar").click(function(event){
        var edad = $("#edad").val();

        if(edad == ""){
            $("#mensaje1").fadeIn();
            event.preventDefault(); 
        }else{
            $("#mensaje1").fadeOut();
        }
    });
});