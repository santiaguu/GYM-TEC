import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://vpkroolwbbfrwmpzisna.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwa3Jvb2x3YmJmcndtcHppc25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MTg0NjQsImV4cCI6MjA0NzE5NDQ2NH0.EjlVv9_9BiqcccxgRKMZ6_4eFCMY0am84Y3q8W-Eq_c')

  // Obtener el formulario y el botón de envío
const form = document.getElementById('register');

// Manejar el envío del formulario
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Insertar los datos en Supabase
    try {
        const { data, error } = await supabase
            .from('tu_tabla')
            .insert([{ name, phone, password }]);

        if (error) {
            console.error(error);
            alert('Error al enviar los datos');
        } else {
            console.log('Datos insertados correctamente:', data);
            alert('Datos enviados correctamente');
            // Redirigir a la página de inicio de sesión
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error(error);
        alert('Ocurrió un error inesperado');
    }
});
  