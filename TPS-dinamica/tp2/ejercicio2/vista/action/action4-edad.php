<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Edad</title>
</head>
<body>
    <?php
    include_once ('../../control/Edad.php');
    $objEdad=new Edad();
    $verifica=$objEdad->MayorEdad($_GET);

 

    // Verificar si la persona es mayor o menor de edad
    if ($verifica) {
        echo "<h1 style='color: #ffff00; background-color: #000;'>Sos mayor de edad.</h1>";
    } else {
        echo "<h1 style='color: #ffff00; background-color: #000;'>Sos menor de edad.</h1>";
    }
    ?>

    <!-- Enlace para volver al formulario -->
    <a href="../form4.html" style='color: #ffff00; background-color: #000;'>Volver al formulario</a>
</body>
</html>
