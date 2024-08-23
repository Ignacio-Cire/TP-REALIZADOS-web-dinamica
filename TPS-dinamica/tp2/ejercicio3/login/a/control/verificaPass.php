<?php
// verificaPass.php

// Definimos un arreglo de usuarios, cada uno con 'usuario' y 'clave' como claves.
$users = [
    //usuarios de pruebas cual si fuera una BD 
    ['usuario' => 'admin', 'clave' => '1234'],  // Usuario 1
    ['usuario' => 'user1', 'clave' => 'abcd'],  // Usuario 2
    ['usuario' => 'nachito', 'clave' => '9876'],  // Usuario 3
    
];

// Verificamos si se han recibido los datos del formulario (usuario y clave).
if (isset($_POST['usuario']) && isset($_POST['clave'])) {
    $usuario = $_POST['usuario'];  // Capturamos el nombre de usuario enviado por el formulario
    $clave = $_POST['clave'];      // Capturamos la clave enviada por el formulario

    $found = false;  // Variable para controlar si el usuario fue encontrado

    // Recorremos el arreglo de usuarios para verificar si las credenciales coinciden
    foreach ($users as $user) {
        if ($user['usuario'] === $usuario && $user['clave'] === $clave) {
            $found = true;  // Si encontramos coincidencia, actualizamos la variable
            break;  // Salimos del bucle ya que no necesitamos seguir buscando
    }
    }

    // Si las credenciales coinciden, enviamos un mensaje de bienvenida
    if ($found) {
        echo json_encode(['status' => 'success', 'message' => 'Bienvenido, ' . $usuario . '!']);
    } 
}
?>
