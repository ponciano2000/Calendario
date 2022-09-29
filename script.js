/* Declaramos la variables */

/* Leemos las entradas */
const diaInput = document.getElementById('dia')
const mesInput = document.getElementById('mes')
const añoInput = document.getElementById('año')

/* Boton para calcular */
const calcButton = document.getElementById('calcular')

/* Llamar el resultado */
const resultadoInput = document.getElementById('resultado')

/* Arreglo con los días de la semana */

const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

/* Declarar el switch */
const eslaborable = (diaSemana) => {
    switch (diaSemana) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Laborable"
            break;

        default:
            return "Fin de semana"
            break;
    }
}
/* El resultado se guarda en eslaborable */

const calcular = () => {
    const dt = new Date(añoInput.value, mesInput.value - 1, diaInput.value)
    const diaSemana = dt.getDay()
    resultadoInput.value = `${dias[diaSemana][0].toUpperCase()+dias[diaSemana].slice(1)}, ${eslaborable(diaSemana)}`
    console.log(`${dias[diaSemana][0].toUpperCase()+dias[diaSemana].slice(1)}, ${eslaborable(diaSemana)}`)
}
/* .slice regresa los elementos selecionados del arreglo pero en un arreglo nuevo */

const validateInputs = event => {
    event.preventDefault()
    añoInput.value && mesInput.value && diaInput.value ? calcular() : alert('Todos los campos deben estar llenos')
}

calcButton.addEventListener("click", validateInputs) 