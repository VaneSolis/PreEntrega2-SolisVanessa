// Funciones
function calcularCuotas(opcion) {
    const capital = opciones[opcion - 1].capital;
    const cuotas = opciones[opcion - 1].cuotas;
    const interes = 0.2;
    const subtotal1 = capital * interes;
    const subtotal2 = capital + subtotal1;
    const cuotaMensual = subtotal2 / cuotas;
    alert(`Pagarás ${cuotaMensual.toFixed(2)} mensuales`);
}

// Variables
const opciones = [
    { capital: 3000, cuotas: 6 },
    { capital: 3000, cuotas: 12 },
    { capital: 4000, cuotas: 6 },
    { capital: 4000, cuotas: 12 }
];

let opcion = parseFloat(prompt("Elija una opción:\n1-$3000 en 6 cuotas\n2-$3,000 en 12 cuotas\n3-$4000 en 6 cuotas\n4-$4000 en 12 cuotas\n5-Salir"));

while (opcion !== 5) {
    if (opcion >= 1 && opcion <= opciones.length) {
        calcularCuotas(opcion);
    } else {
        alert("Opción incorrecta");
    }
    opcion = parseFloat(prompt("Elija una opción:\n1-$3000 en 6 cuotas\n2-$3,000 en 12 cuotas\n3-$4000 en 6 cuotas\n4-$4000 en 12 cuotas\n5-Salir"));
}

alert("Finalizando programa. Presiona Enter para cerrar");