<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../Vista/assets/css/datos3.css">
    <title>Resultado del Formulario</title>
</head>
<body>
    <div class="form-container">
        <?php  
        include_once('../Control/DatosPersona.php');
        $objPersona = new DatosPersona();
        $arreglo = $objPersona->DatosPersona($_POST);
        $sexo = $arreglo[0];
        $estudios = $arreglo[1];
        $cantidad_deportes = $arreglo[2];
        echo "<h1>Sexo: $sexo</h1>";
        echo "<h1>Nivel de Estudios: $estudios</h1>";
        echo "<h1>Practicas $cantidad_deportes deporte(s).</h1>";
        ?>
    </div>
</body>
</html>
