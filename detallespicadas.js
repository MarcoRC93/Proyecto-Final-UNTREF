document.addEventListener("DOMContentLoaded", () => {
    const detalleTablas = document.getElementById("detalleTablas");

    const urlParams = new URLSearchParams(window.location.search);
    const idPicada = urlParams.get("id");

    const datosPicadas = JSON.parse(localStorage.getItem("picadas"));

    if (datosPicadas && datosPicadas.picadas) {
        const picadaSeleccionada = datosPicadas.picadas.find(picada => picada.id === parseInt(idPicada));

        if (picadaSeleccionada) {
            const contenedorDetallesPicada = document.createElement("div");
            contenedorDetallesPicada.classList.add("detalles-picadas");
            contenedorDetallesPicada.innerHTML = `
                <img src="${picadaSeleccionada.imagen}" alt="Imagen de la picada">
                <h2>${picadaSeleccionada.nombre}</h2>
                <h5>Precio: ${picadaSeleccionada.precio}</h5>
                <div class="descripcion">
                    <p>${picadaSeleccionada.descripcion}</p>
                </div>
            <div class="botones">
                <button class="atras">Volver atrás</button>
                <button class="comprar">Comprar</button>
                <button class="ver-mas">Agregar al carrito</button>

            </div>
            `;
            
            detalleTablas.appendChild(contenedorDetallesPicada);

            const botonAtras = contenedorDetallesPicada.querySelector(".atras");
            botonAtras.addEventListener("click", () => {
                window.location.href = './index.html';
            });
        }
    }
});