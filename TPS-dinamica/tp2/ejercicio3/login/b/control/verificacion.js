$(document).ready(function () {
    $('#submitBtn').on('click', function (event) {
        event.preventDefault();  // Evita que el enlace recargue la página.

        const usuario = $('#usuario').val().trim();  // Obtiene y limpia el valor del campo usuario.
        const clave = $('#clave').val().trim();      // Obtiene y limpia el valor del campo contraseña.

        // Verificación de que el campo de usuario no esté vacío.
        if (usuario === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El campo de nombre de usuario no puede estar vacío.',
            });
            return;  // Termina la ejecución de la función si el campo está vacío.
        }

        // Verificación de que el campo de contraseña no esté vacío.
        if (clave === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El campo de contraseña no puede estar vacío.',
            });
            return;  // Termina la ejecución de la función si el campo está vacío.
        }

        // Verificación de que la contraseña tenga al menos 8 caracteres.
        if (clave.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Contraseña insegura',
                text: 'La contraseña debe tener al menos 8 caracteres.',
            });
            return;  // Termina la ejecución de la función si la contraseña es demasiado corta.
        }

        // Verificación de que la contraseña no sea igual al nombre de usuario.
        if (clave === usuario) {
            Swal.fire({
                icon: 'error',
                title: 'Contraseña insegura',
                text: 'La contraseña no puede ser igual que el nombre de usuario.',
            });
            return;  // Termina la ejecución de la función si la contraseña es igual al usuario.
        }

        // Verificación de que la contraseña contenga al menos una letra y un número.
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)/;  // Expresión regular para verificar que la contraseña tenga letras y números.
        if (!regex.test(clave)) {
            Swal.fire({
                icon: 'error',
                title: 'Contraseña insegura',
                text: 'La contraseña debe contener al menos una letra y un número.',
            });
            return;  // Termina la ejecución de la función si la contraseña no cumple con el criterio.
        }

        // Si todas las validaciones pasan, se realiza la solicitud AJAX al servidor.
        $.ajax({
            url: '/TP%20REALIZADOS-web-dinamica/TP2/login/control/verificaPass.php',  // Archivo PHP que procesa la solicitud.
            type: 'POST',  // Tipo de solicitud (POST en este caso).
            data: { usuario: usuario, clave: clave },  // Datos enviados al servidor (usuario y clave).
            dataType: 'json',  // Tipo de dato esperado en la respuesta (JSON).

            // Función que se ejecuta si la solicitud es exitosa.
            success: function (response) {
                if (response.status === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Bienvenido!',
                        text: response.message,  // Muestra el mensaje de bienvenida.
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.message,  // Muestra el mensaje de error si las credenciales no son correctas.
                    });
                }
            },

            // Función que se ejecuta si ocurre un error en la solicitud AJAX.
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Error en la solicitud',
                    text: 'No se pudo procesar la solicitud.',
                });
            }
        });
    });
});
