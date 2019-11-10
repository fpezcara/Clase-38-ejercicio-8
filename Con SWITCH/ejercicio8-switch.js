//  EJERCICIO 8
//  1. Hacer un programa que le cuente al usuario el origen de los nombres de los días de la semana. 
//  2. Pedir al usuario que ingrese un día de la semana mediante un prompt. 
//  3. Si el día es lunes, mostrar el mensaje "Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'". 
//  4. Si es martes, "Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'".
//  5. Si es miércoles, "Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'".
//  6. Si es jueves, "Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'".
//  7. Si es viernes, "Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'".
//  8. Si es sábado, "Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío".
//  9. Si es domingo, "Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'". 

let dia = prompt("Ingrese un día");

switch (dia) {
    case "lunes":
        alert("Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'")
        break;
    case "martes":
        alert("Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'")
        break;
    case "miercoles":
        alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'")
        break;
    case "jueves":
        alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'")
        break;
    case "viernes":
        alert("Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'")
        break;
    case "sabado":
        alert("Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío")
        break;
    case "domingo":
        alert("Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'")
        break;
    default:
        alert("Ud. no ingresó un día válido")
        break;
}

