<?php

class Datos{
    public function procesarDatos($dato) {
            // Verificar si se recibieron los datos mediante el método POST
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Obtener los datos del formulario
        // Obtiene el valor del campo 'nombre' enviado por el formulario usando el método POST.
        // La función htmlspecialchars() convierte caracteres especiales en entidades HTML para prevenir ataques XSS.
        $nombre = htmlspecialchars($dato['nombre']);

        // Obtiene el valor del campo 'apellido' enviado por el formulario usando el método POST.
        // La función htmlspecialchars() convierte caracteres especiales en entidades HTML para prevenir ataques XSS.
        $apellido = htmlspecialchars($dato['apellido']);

        // Obtiene el valor del campo 'edad' enviado por el formulario usando el método POST.
        // Utiliza filter_var() con FILTER_VALIDATE_INT para validar que el valor sea un número entero positivo.
        // Si no es válido o no es un número natural, se asigna 0 como valor predeterminado.
        $edad = filter_var($dato['edad'], FILTER_VALIDATE_INT, [
            'options' => [
                'min_range' => 0 // Asegura que el número sea 0 o mayor.
            ]
        ]);

        // Obtiene el valor del campo 'direccion' enviado por el formulario usando el método POST.
        // La función htmlspecialchars() convierte caracteres especiales en entidades HTML para prevenir ataques XSS.
        $direccion = htmlspecialchars($dato['direccion']);

        $arrays = array (
            'nombre' => $nombre,
            'apellido' =>$apellido,
            'edad' => $edad,
            'direccion' => $direccion
        );

          return $arrays;
      


    }




}
}

?>
