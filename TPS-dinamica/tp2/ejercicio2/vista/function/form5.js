$(document).ready(function(){
    $("#formulario").submit(function(event){
        var radio1 = $(".sexo:checked").length;
        var radio2 = $(".estudios:checked").length;

        if (radio1 === 0) {
            $("#mensaje_sexo").fadeIn();
            event.preventDefault(); 
        } else {
            $("#mensaje_sexo").fadeOut();
        }

        if (radio2 === 0) {
            $("#mensaje_estudios").fadeIn();
            event.preventDefault();
        } else {
            $("#mensaje_estudios").fadeOut();
        }
    });
});