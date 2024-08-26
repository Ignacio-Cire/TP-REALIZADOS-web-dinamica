$(document).ready(function () {
    $('#submitBtn').on('click', function (event) {
        event.preventDefault();  // Previene el comportamiento por defecto del botón

        // Obtener los valores de los campos del formulario
        const nombre = $('#nombre').val();
        const apellido = $('#apellido').val();
        const edad = $('#edad').val();
        const direccion = $('#direccion').val();

        // Verificar si todos los campos están llenos
        if (nombre === '' || apellido === '' || edad === '' || direccion === '') {
            Swal.fire('Incompleto', 'Por favor, complete todos los campos.', 'error');
        } else {
            // Si todos los campos están completos, enviar el formulario
            $('#loginForm').off('submit').submit();
        }
    });
});
