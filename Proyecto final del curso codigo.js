function calcularCotizacion(precioBase, edadAsegurado, edadConyuge, cantidadHijos) {
    let recargoPorEdadAsegurado = 0;
    if (edadAsegurado >= 18 && edadAsegurado <= 24) {
        recargoPorEdadAsegurado = precioBase * 0.10;
    } else if (edadAsegurado >= 25 && edadAsegurado <= 49) {
        recargoPorEdadAsegurado = precioBase * 0.20;
    } else if (edadAsegurado >= 50) {
        recargoPorEdadAsegurado = precioBase * 0.30;
    }

    let recargoPorEdadConyuge = 0;
    if (edadConyuge >= 18 && edadConyuge <= 24) {
        recargoPorEdadConyuge = precioBase * 0.10;
    } else if (edadConyuge >= 25 && edadConyuge <= 49) {
        recargoPorEdadConyuge = precioBase * 0.20;
    } else if (edadConyuge >= 50) {
        recargoPorEdadConyuge = precioBase * 0.30;
    }

    let recargoPorHijos = 0;
    if (edadConyuge > 0) {
        recargoPorHijos = precioBase * 0.20 * cantidadHijos;
    }

    const precioTotal = precioBase + recargoPorEdadAsegurado + recargoPorEdadConyuge + recargoPorHijos;
    
    return precioTotal;
}

let edadAsegurado = parseInt(prompt("Ingrese la edad del asegurado:"));

// Validar que la edad del asegurado sea mayor o igual a 18 usando un bucle while
while (edadAsegurado < 18) {
    alert("La edad del asegurado debe ser mayor o igual a 18 años.");
    edadAsegurado = parseInt(prompt("Ingrese la edad del asegurado:"));
}

const tieneConyuge = prompt("¿El asegurado tiene cónyuge? (Sí/No)").toLowerCase();
let edadConyuge = 0;
if (tieneConyuge === 'sí' || tieneConyuge === 'si') {
    edadConyuge = parseInt(prompt("Ingrese la edad del cónyuge:"));
}

let cantidadHijos = 0;
if (edadConyuge > 0) {
    const tieneHijos = prompt("¿El asegurado tiene hijos? (Sí/No)").toLowerCase();
    if (tieneHijos === 'sí' || tieneHijos === 'si') {
        cantidadHijos = parseInt(prompt("Ingrese la cantidad de hijos:"));
    }
}

const precioBase = parseFloat(prompt("Ingrese el precio base del seguro:"));

const cotizacionTotal = calcularCotizacion(precioBase, edadAsegurado, edadConyuge, cantidadHijos);
console.log("El precio total de la cotización es:", cotizacionTotal);
