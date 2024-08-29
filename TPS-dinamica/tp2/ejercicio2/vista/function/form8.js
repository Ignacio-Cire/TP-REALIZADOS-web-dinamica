$(document).ready(function(){
    $("#enviar").click(function(event){
        var edad = $("#edad").val();
        var estudia = $("input[type='radio']:checked").length;

        if(edad == ""){
            $("#mensaje1").fadeIn();
            event.preventDefault(); 
        }else{
            $("#mensaje1").fadeOut();
            if (estudia === 0) {
               $("#mensaje2").fadeIn();
               event.preventDefault(); 
            } else {
                    $("#mensaje2").fadeOut();
        }
        }
    });
});