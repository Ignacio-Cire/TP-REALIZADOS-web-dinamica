<?php

class Operacion {
    public function operaciones($dato){
        $numero1 = intval($dato['numero1']);
        $numero2 = intval($dato['numero2']);
        $operacion = $dato['operacion'];
    
        // Inicializar variables para el resultado y el texto de la operación
        $resultado = 0;
        $operacion_texto = '';
    
        // Realizar la operación matemática según la selección
        switch ($operacion) {
            case 'suma':
                $resultado = $numero1 + $numero2;
                $operacion_texto = 'Suma';
                break;
            case 'resta':
                $resultado = $numero1 - $numero2;
                $operacion_texto = 'Resta';
                break;
            case 'multiplicacion':
                $resultado = $numero1 * $numero2;
                $operacion_texto = 'Multiplicación';
                break;
            case 'division':
                if ($numero2 != 0) {
                    $resultado = $numero1 / $numero2;
                    $operacion_texto = 'División';
                } else {
                    $resultado = 'Error: División por cero';
                    $operacion_texto = 'División';
                }
                break;
        }

        $arrayDatos = array (
            $operacion_texto, $numero1, $numero2, $resultado
        );
    
        return $arrayDatos;

    }
}