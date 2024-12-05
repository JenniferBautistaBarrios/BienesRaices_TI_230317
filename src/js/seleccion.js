// Seleccionar los checkboxes
const renta = document.getElementById('renta');
const venta = document.getElementById('venta');

// Función para actualizar el valor del checkbox
function updateCheckboxValue(checkbox) {
    checkbox.value = checkbox.checked ? 'true' : 'false';
    console.log(`Checkbox ${checkbox.name} actualizado a: ${checkbox.value}`);
}

// Escuchar cambios en "renta"
renta.addEventListener('change', function () {
    updateCheckboxValue(this);
});

// Escuchar cambios en "venta"
venta.addEventListener('change', function () {
    updateCheckboxValue(this);
});