<?php

$dir = 'archivos/'; // Directorio donde se guardará el archivoç



// Verificamos si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Comprobamos si se han producido errores
    if ($_FILES['miArchivo']['error'] <= 0) {
        // Validamos el tipo de archivo
        $validTypes = ['application/pdf', 'application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document' ];
        $fileType = $_FILES['miArchivo']['type'];
        
        if (in_array($fileType, $validTypes)) {
            // Validamos el tamaño del archivo (máximo 2MB)
            $maxSize = 2 * 1024 * 1024; // 2MB en bytes
            if ($_FILES['miArchivo']['size'] <= $maxSize) {
                if (!is_dir($dir)) {
                    mkdir($dir, 0755, true); // Crea el directorio con permisos 0755
                }
                // Intentamos mover el archivo al servidor
                $targetFile = $dir . basename($_FILES['miArchivo']['name']);
                if (move_uploaded_file($_FILES['miArchivo']['tmp_name'], $targetFile)) {
                    echo "El archivo " . htmlspecialchars($_FILES['miArchivo']['name']) . " se ha subido con éxito. <br />";
                    echo "Puedes verlo <a href='$targetFile'>aquí</a>.";
                } else {
                    echo "ERROR: No se pudo guardar el archivo.";
                }
            } else {
                echo "ERROR: El archivo excede el tamaño máximo permitido de 2MB.";
            }
        } else {
            echo "ERROR: El tipo de archivo no es válido. Solo se permiten archivos .pdf y .doc.";
        }
    } else {
        echo "ERROR: No se pudo cargar el archivo. Código de error: " . $_FILES['miArchivo']['error'];
    }
}
?>
