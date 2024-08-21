<?php
class Calculo{
    public function sacarCalculo($dato){

                // Obtener los datos del formulario
                $edad = intval($dato['edad']);
                $es_estudiante = $dato['estudiante'];
        
                // Inicializar el precio
                $precio = 0;
        
                // Determinar el precio según las tarifas
                if (($es_estudiante == 'si') && ($edad < 12)) {
                    $precio = 160;
                }elseif (($es_estudiante == 'si') && ($edad >= 12)){
                    $precio = 180;
                }else{
                    $precio = 300;
                }

                $arrayDatos = array (
                    $edad,
                    $es_estudiante,
                    $precio,
                );

                return $arrayDatos;
    }
}