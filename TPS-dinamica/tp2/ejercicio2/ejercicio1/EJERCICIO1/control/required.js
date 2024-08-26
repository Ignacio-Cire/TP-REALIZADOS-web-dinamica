$(document).ready(function () {
    $("form").validate({
        rules: {
            numero: {
                required: true,
                number: true
            }
        },
        messages: {
            numero: {
                required: "Por favor, ingrese un número.",
                number: "Por favor, ingrese un número válido."
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        
        submitHandler: function(form) {
            alert("Formulario enviado exitosamente");
            form.submit(); // Envía el formulario manualmente
            return false; // Previene el envío por defecto
        },

        invalidHandler: function(event, validator) {
            alert("Por favor, complete el formulario correctamente.");
        }
    });
});