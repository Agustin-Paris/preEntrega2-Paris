
function notaFinal() {
    let sumaNotas = 0;
    const Alumno = (prompt('Nombre completo del alumno: '));
    for (let i = 1; i <= 3; i++) {      
        const nota = parseFloat(prompt(`Ingrese nota del trimestre N` + i ));

        if (nota >= 0 && nota <= 10) {
            console.log('Nota válida');
        } else {
            console.log('Nota inválida. Por favor, ingrese una nota entre 0 y 10.');
            return; // Terminar la ejecución de la función si la nota es inválida
        }
        sumaNotas += nota;
    }

    const finalNota = sumaNotas / 3;

    if (finalNota >= 7) {
        alert( Alumno + ' estás aprobado con: ' + finalNota.toFixed(2));
    } else {
        alert( Alumno + ' estás desaprobado. Tu nota final es: ' + finalNota.toFixed(2));
    }
}

notaFinal();

