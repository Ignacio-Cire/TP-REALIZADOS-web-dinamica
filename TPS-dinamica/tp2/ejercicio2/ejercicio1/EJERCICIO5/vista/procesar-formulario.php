<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="datos2.css">
    <title>Resultado del Formulario</title>
</head>
<body>
    <div class="form-container">
        <?php
        include_once('../control/PersonaDatos.php');
        $objPersona = new PersonaDatos();
        $arreglo = $objPersona->PersonaDatos($_POST);
        $sexo = $arreglo[0];
        $estudios = $arreglo[1];

        // Mostrar el mensaje
        echo "<h1>Sexo: $sexo</h1>";
        echo "<h1>Nivel de Estudios: $estudios</h1>";
        ?>
    </div>
</body>
</html>
