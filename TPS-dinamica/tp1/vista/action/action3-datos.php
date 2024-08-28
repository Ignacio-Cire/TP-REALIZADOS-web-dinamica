
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Información Recibida</title>
    <link rel="stylesheet" href="../assets/style3.css">
</head>
<body>
    <div class="container">
        <h1>Información Recibida</h1>
        
        <p>
<?php    
    include_once ('../../control/Datos.php');  
    $objDatos = new Datos();

    $arreglo = $objDatos->procesarDatos($_POST); // Asumiendo que este método retorna un array de datos

   
    if ((count($arreglo) == 4) && ($arreglo !== null)) {
        // Usamos el array $arreglo para acceder a los datos    
        $nombre = $arreglo['nombre'];
        $apellido = $arreglo['apellido'];
        $edad = $arreglo['edad'];
        $direccion = $arreglo['direccion'];

        $mensaje = "Hola, yo soy <strong>$nombre $apellido</strong>, tengo <strong>$edad</strong> años y vivo en <strong>$direccion</strong>.";
    } else {
        $mensaje = "No se enviaron datos.";
    }

    echo $mensaje; // Imprimir el mensaje
?>
</p>




        <a href="../form3.html" class="btn">Volver al formulario</a>
    </div>
</body>
</html>
