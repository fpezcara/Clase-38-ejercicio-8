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

const lunes = "Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'";
const martes = "Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'";
const miercoles = "Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'";
const jueves = "Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'";
const viernes = "Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'";
const sabado = "Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío";
const domingo = "Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'";

let respuestaUsuario = prompt(`¡Bienvenido a la página que le contará el origen de los días de la semana!
Por favor, ingrese un día de la semana:`);

if (respuestaUsuario === "lunes") {
    alert(lunes)
}
else if (respuestaUsuario === "martes") {
    alert(martes)
}
else if (respuestaUsuario === "miercoles") {
    alert(miercoles)
}
else if (respuestaUsuario === "jueves") {
    alert(jueves)
}
else if (respuestaUsuario === "viernes") {
    alert(viernes)
}
else if (respuestaUsuario === "sabado") {
alert(sabado)
}
else if (respuestaUsuario === "domingo") {
    alert(domingo)
}
else {
    alert("No ingresaste nada")
};