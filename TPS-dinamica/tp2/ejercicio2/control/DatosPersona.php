<?php
class DatosPersona{
    public function DatosPersona($dato){
               // Obtener los datos del formulario
               $sexo = htmlspecialchars($dato['sexo']);
               $estudios = htmlspecialchars($dato['estudios']);
               $deportes = isset($dato['deportes']) ? $dato['deportes'] : [];
               $cantidad_deportes = count($deportes);

               $arrayRespuesta = array (
                $sexo,
                $estudios,
                $cantidad_deportes
               );

               return $arrayRespuesta;
    }
}