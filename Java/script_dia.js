//Día de la Semana: Pregunta al usuario que ingrese un día de la semana. Utiliza SweetAlert2 para mostrar un mensaje relacionado con el día ingresa
let dia = prompt ("Ingresa un día de la semana: ");

switch (dia) { 
    case "Lunes":
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Lunes',
            icon:'Success'
        });
        break;          
    case "Martes":
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Martes',
            icon:'Success'
        });
        break;
    case "Miércoles":
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Miércoles',
            icon:'Success'
        });
        break;
    case "Jueves":  
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Jueves',
            icon:'Success'
        });
        break;  

    case "Viernes": 
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Viernes',
            icon:'Success'
        });
        break;
    case "Sábado":
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Sábado',
            icon:'Success'
        });
        break;
    case "Domingo": 
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Domingo',
            icon:'Success'
        });
        break;
    default:
            Swal.fire({
                title:'¡Bienvenido!',
                text:'No es un día de la semana',
                icon:'Success'
            });
            break;
}