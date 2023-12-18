// Pregunta al usuario si desea recibir notificaciones y muestra un mensaje de acuerdo o desacuerdo.

// Mostrar una pregunta utilizando SweetAlert2//
Swal.fire({
    title: '¿Quieres recibir notificaciones?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
  }).then((result) => {
    // Verificar la respuesta del usuario
    if (result.isConfirmed) {
      // Mostrar mensaje de acuerdo
      Swal.fire('¡Acuerdo!', 'Recibirás notificaciones.', 'success');
    } else {
      // Mostrar mensaje de desacuerdo
      Swal.fire('¡Desacuerdo!', 'No recibirás notificaciones.', 'info');
    }
  });



  let edad = promt ("Ingresa tu edad: ");

//Verificar si el usuario ingresó su edad
if (edad>=18){
    Swal.fire({
        title:'¡Bienvenido!',
        text:'Eres mayor de edad, puedes entrar',
        icon:'Success'
    });
} else {
    Swal.fire({
        title:'Edad no permitida',
        text:'Eres menor de edad, no puedes entrar',
        icon:'Error'
    });
}