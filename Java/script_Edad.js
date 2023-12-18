//Solicita al usuario ingresar su edad mediante un cuadro de diálogo SweetAlert2. Muestra un mensaje indicando si es menor de edad o mayor de edad.
let edad = prompt ("Ingresa tu edad: ");

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