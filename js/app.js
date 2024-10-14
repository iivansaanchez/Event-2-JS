// Selecciona los botones
const btnRojo = document.getElementById('btnRojo');
const btnAzul = document.getElementById('btnAzul');
const btnVerde = document.getElementById('btnVerde');
const btnReset = document.getElementById('btnReset');

// Función para cambiar el tema
function cambiarTema(tema) {
    // Eliminar cualquier clase de tema existente
    document.body.classList.remove('tema-rojo', 'tema-azul', 'tema-verde');

    // Agregar la clase de tema si no es reset
    if (tema) {
        document.body.classList.add(tema);
    }
}

// Asignar los eventos a cada botón
btnRojo.addEventListener('click', () => cambiarTema('tema-rojo'));
btnAzul.addEventListener('click', () => cambiarTema('tema-azul'));
btnVerde.addEventListener('click', () => cambiarTema('tema-verde'));
btnReset.addEventListener('click', () => cambiarTema(''));
