//Día de la Semana: Pregunta al usuario que ingrese un día de la semana. Utiliza SweetAlert2 para mostrar un mensaje relacionado con el día ingresa
let dia = prompt ("Ingresa un día de la semana: ");

switch (dia) { 
    case ("Lunes" || "1" || "LUNES" || "Monday" || "Lunes"):
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Lunes',
            icon:'Success'
        });
        break;          
    case ("Martes" || "2" || "MARTES" || "Tuesday" || "Martes"):
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Martes',
            icon:'Success'
        });
        break;  
    case ("Miércoles" || "3" || "MIÉRCOLES" || "Wednesday" || "Miércoles"):         

        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Miércoles',
            icon:'Success'
        });
        break;
    case ("Jueves" || "4" || "JUEVES" || "Thursday" || "Jueves"):
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Jueves',
            icon:'Success'
        });
        break;
    case ("Viernes" || "5" || "VIERNES" || "Friday" || "Viernes"):  
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Viernes',
            icon:'Success'
        });
        break;
    case ("Sábado" || "6" || "SÁBADO" || "Saturday" || "Sábado"):       
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Sábado',
            icon:'Success'
        });
        break;
    case ("Domingo" || "7" || "DOMINGO" || "Sunday" || "Domingo"):
        Swal.fire({
            title:'¡Bienvenido!',
            text:'Hoy es Domingo',
            icon:'Success'
        });
        break;
    default:    
        Swal.fire({
            title:'¡Bienvenido!',
            text:'No ingresaste un día de la semana',
            icon:'Error'
        });
        break;
}




