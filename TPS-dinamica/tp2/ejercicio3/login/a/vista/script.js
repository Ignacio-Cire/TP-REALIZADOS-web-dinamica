
$(document).ready(function () { 
    // Cuando el documento esté listo (cargado completamente), se ejecuta esta función.

    $('#submitBtn').on('click', function (event) {
        event.preventDefault();  // Previene que el botón recargue la página al hacer clic.

        const usuario = $('#usuario').val();  // Obtenemos el valor del campo de usuario
        const clave = $('#clave').val();      // Obtenemos el valor del campo de clave

        // Realizamos una solicitud AJAX para enviar los datos al script verificaPass.php
        $.ajax({
            url: '/TP%20REALIZADOS-web-dinamica/TP2/login/control/verificaPass.php',  // Especificamos el archivo al que se enviarán los datos
            type: 'POST',             // Indicamos que la solicitud será de tipo POST
            data: { usuario: usuario, clave: clave },  // Enviamos los datos del usuario y clave
            dataType: 'json',  // Esperamos una respuesta en formato JSON
            
            // Si la solicitud es exitosa, esta función se ejecuta

            success: function (response) {
                if (response.status === 'success') {
                    alert(response.message);  // Si las credenciales son correctas, mostramos el mensaje de bienvenida
                    // Puedes redirigir al usuario a otra página si es necesario
                }
            }
        });
    });
});
