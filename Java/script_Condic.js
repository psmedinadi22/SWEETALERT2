//Número Positivo o Negativo: Pide al usuario ingresar un número. Utiliza SweetAlert2 para mostrar si el número es positivo, negativo o cero.
let numero = prompt ("Ingresa un número: ");

//Verificar si el usuario ingresó su edad
if (numero>=0){
    Swal.fire({
        title:'¡Bienvenido!',
        text:'Su número es positivo',
        icon:'Success'
    });
} else {
    Swal.fire({
        title:'¡Bienvenido',
        text:'Su número es negativo',
        icon:'Error'
    });
}