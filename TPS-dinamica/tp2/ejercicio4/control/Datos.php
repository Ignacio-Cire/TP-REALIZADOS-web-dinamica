<?php
class Datos{
    public function mostrarDatos($dato){
        $titulo = $dato['titulo'];
        $actores = $dato['actores'];
        $director = $dato['director'];
        $guion = $dato['guion'];
        $produccion = $dato['produccion'];
        $anio = $dato['anio'];
        $nacionalidad = $dato['nacionalidad'];
        $genero = $dato['genero'];
        $duracion = $dato['duracion'];
        $restricciones = $dato['restriccion'];

        if($restricciones == 'todo_publico'){
            $restricciones = 'Todo público';
        }elseif($restricciones == 'mayores_7'){
            $restricciones = 'Mayores de 7 años';
        }else{
            $restricciones = 'Mayores de 18 años';
        }

        $arregloDatos = array (
            $titulo,
            $actores,
            $director,
            $guion,
            $produccion,
            $anio,
            $nacionalidad,
            $genero,
            $duracion,
            $restricciones
        );

        return $arregloDatos;

    }
}