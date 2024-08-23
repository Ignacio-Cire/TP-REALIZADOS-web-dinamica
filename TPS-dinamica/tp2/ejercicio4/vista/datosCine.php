<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="form-cine.css">
    <title>Datos Cinema</title>
</head>
<body>
    <h1>LA PELÍCULA INTRODUCIDA ES:</h1>
   <?php
   include_once ('../control/Datos.php');
   $objDatos = new Datos();
   $arrayCinema = $objDatos->mostrarDatos($_POST);
   $titulo = $arrayCinema[0];
   $actores = $arrayCinema[1];
   $director = $arrayCinema[2];
   $guion = $arrayCinema[3];
   $produccion = $arrayCinema[4];
   $anio = $arrayCinema[5];
   $nacionalidad = $arrayCinema[6];
   $genero = $arrayCinema[7];
   $duracion = $arrayCinema[8];
   $restricciones = $arrayCinema[9];
   echo "<div class='form-container'>";
   echo "<p><b>Titulo:</b> ".$titulo.".</p>";
   echo "<p><b>Actores:</b> ".$actores.".</p>";
   echo "<p><b>Director:</b> ".$director.".</p>";
   echo "<p><b>Guión:</b> ".$guion.".</p>";
   echo "<p><b>Producción:</b> ".$produccion.".</p>";
   echo "<p><b>Año:</b> ".$anio.".</p>";
   echo "<p><b>Nacionalidad:</b> ".$nacionalidad.".</p>";
   echo "<p><b>Género:</b> ".$genero.".</p>";
   echo "<p><b>Duración:</b> ".$duracion." minutos.</p>";
   echo "<p><b>Restricciones de edad:</b> ".$restricciones.".</p>";
   echo "</div>";
   ?>
</body>
</html>