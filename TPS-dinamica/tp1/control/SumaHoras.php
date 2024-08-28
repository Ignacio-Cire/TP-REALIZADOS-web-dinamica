<?php	
class SumaHoras{
    public function SumaHora ($hora) {
        
        if (isset($hora['horas'])) {
            // Si 'horas' está definido, se asigna el valor del array a la variable $horas.
            $horas = $hora['horas']; // Obtener el array de horas

            // Inicializar la variable para sumar las horas
            $totalHoras = 0;

            // Sumar las horas de cada día
            // Se recorre el array $horas utilizando un bucle foreach, que toma cada valor del array ($hora) en cada iteración.
            foreach ($horas as $hora) {
                // En cada iteración, se convierte el valor de $hora a un entero (int) y se suma a $totalHoras.
                // Esto es importante porque los datos que se envían en un formulario siempre llegan como cadenas de texto (strings).
                $totalHoras += intval($hora);
                
            }

    }
    return $totalHoras;
}
}