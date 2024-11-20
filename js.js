document
  .getElementById("consultaForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const consulta = document.getElementById("consulta").value;

    // Validar que los campos requeridos estén completos
    if (nombre && email && consulta) {
      // Aquí normalmente irían las instrucciones para enviar los datos al servidor
      alert("¡Gracias por su consulta! Nos pondremos en contacto pronto.");
      this.reset(); // Limpiar el formulario
    } else {
      alert("Por favor, complete todos los campos requeridos.");
    }
  });
