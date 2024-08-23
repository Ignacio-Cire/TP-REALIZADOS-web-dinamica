<?php
class Edad{

    public function MayorEdad($edad){
        $esMayor=true;

        $edad = intval($edad['edad']);

        if ($edad< 18) {
            $esMayor=false;
      
        }
            return $esMayor;
    }

}
 
    
