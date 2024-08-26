$(document).ready(function () {
    $('#submitBtn').on('click', function (event) {
        event.preventDefault();  // Previene el comportamiento por defecto del enlace

        const usuario = $('#usuario').val();
        const clave = $('#clave').val();

        $.ajax({
            url: 'http://localhost:3000/TPS-dinamica/tp2/ejercicio3/login/a/control/verificaPass.php',  // Asegúrate de que esta ruta sea correcta
            type: 'POST',
            data: { usuario: usuario, clave: clave },
            dataType: 'json',
            success: function (response) {
                if (response.status === 'success') {
                    Swal.fire('Éxito', response.message, 'success');  // Usando SweetAlert para mostrar el mensaje
                } else {
                    Swal.fire('Error', response.message, 'error');
                }
            },
            error: function () {
                if (usuario === '' || clave === '') {
                    Swal.fire('Incompleto', 'Por favor, complete todos los campos.', 'error');
                    return;
                    
                }
                Swal.fire('Error', 'No se pudo realizar la solicitud.', 'error');
            }
        });
    });
});
