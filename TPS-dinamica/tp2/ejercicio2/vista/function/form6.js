$(document).ready(function() {
    $("#formulario").submit(function(event) {
        var radio1 = $(".sexo:checked").length;
        var radio2 = $(".estudios:checked").length;
        var deportes = $("input[type='checkbox']:checked").length;

        var valid = true;

        if (radio1 === 0) {
            $("#mensaje_sexo").fadeIn();
            valid = false;
        } else {
            $("#mensaje_sexo").fadeOut();
        }

        if (radio2 === 0) {
            $("#mensaje_estudios").fadeIn();
            valid = false;
        } else {
            $("#mensaje_estudios").fadeOut();
        }

        if (deportes === 0) {
            $("#mensaje_deporte").fadeIn();
            valid = false;
        } else {
            $("#mensaje_deporte").fadeOut();
        }

        if (!valid) {
            event.preventDefault(); 
        }
    });
});