

$(document).ready(function () {
    $('#loginForm').submit(function (event) {
      // Evitar el envío del formulario
      event.preventDefault();
  
      // Obtener valores de los campos
      var usuario = $('#usuario').val().trim();
      var clave = $('#clave').val().trim();
  
      // Resetear mensajes de error
      $('#usuario, #clave').removeClass('is-invalid');
      
      // Validar que los campos no estén vacíos
      if (usuario === '') {
        $('#usuario').addClass('is-invalid');
        Swal.fire('Error', 'Por favor, ingresa tu nombre de usuario.', 'error');
        return;
      }
  
      if (clave === '') {
        $('#clave').addClass('is-invalid');
        Swal.fire('Error', 'Por favor, ingresa tu contraseña.', 'error');
        return;
      }
  
      // Validar que la contraseña tenga al menos 8 caracteres
      if (clave.length < 8) {
        $('#clave').addClass('is-invalid');
        Swal.fire('Error', 'La contraseña debe tener al menos 8 caracteres.', 'error');
        return;
      }
  
      // Validar que la contraseña no sea igual al nombre de usuario
      if (clave === usuario) {
        $('#clave').addClass('is-invalid');
        Swal.fire('Error', 'La contraseña no puede ser igual al nombre de usuario.', 'error');
        return;
      }
  
      // Validar que la contraseña contenga al menos una letra y un número
      var regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
      if (!regex.test(clave)) {
        $('#clave').addClass('is-invalid');
        Swal.fire('Error', 'La contraseña debe contener al menos una letra y un número.', 'error');
        return;
      }
  
      // Si todas las validaciones pasan, enviar el formulario o realizar otras acciones
      Swal.fire('¡Éxito!', 'Formulario enviado con éxito.', 'success');
      // Aquí puedes enviar el formulario usando AJAX o cualquier otro método.
      // $('#loginForm')[0].submit(); // Para enviar el formulario si todas las validaciones pasan
    });
  });
  