
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('form');
        
        // Maneja el evento de envío del formulario
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Previene el envío del formulario
            
            // Obtiene los datos del formulario
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            
            // Muestra los datos en la consola (puedes mostrarlo en el DOM si prefieres)
            console.log('Datos del formulario:', data);
            
            // Crear una cadena con los datos para mostrar al usuario
            let message = '<h3>Datos ingresados:</h3><ul>';
            for (const [key, value] of Object.entries(data)) {
                message += `<li><strong>${key}:</strong> ${value}</li>`;
            }
            message += '</ul>';
            
            // Muestra los datos en una ventana emergente
            alert(message);
        });
        
        // Maneja el evento de borrado del formulario
        form.addEventListener('reset', () => {
            console.log('Formulario limpiado');
        });
    });

