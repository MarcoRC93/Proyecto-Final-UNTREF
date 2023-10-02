fetch("./picadas.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("picadas", JSON.stringify(datos));

    const divPicadas = document.getElementById("granContenedor");
    const datosPicadas = JSON.parse(localStorage.getItem("picadas"));
    console.log(datosPicadas);

    if (datosPicadas) {
      datosPicadas.picadas.forEach((picadas) => {
        const divItem = document.createElement("div");
        divItem.classList.add("div-item");
        divItem.innerHTML = `
          <img src="${picadas.imagen}" alt="${picadas.nombre}">
          <h3>${picadas.nombre}</h3>
          <h6>${picadas.marca}</h6>
          <h5>Precio: ${picadas.precio}</h5>
          <p>${picadas.cuotas}</p>
          <button class="ver-mas">Ver Más</button>
          <button class="agregar-carrito">Agregar al carrito</button>`;

        divItem.addEventListener("click", () => {
          mostrarDetallesPicadas(picadas);
        });

        divPicadas.appendChild(divItem);
      });
    }
  });

function mostrarDetallesPicadas(picadas) {
  // Here, you should redirect to the details page with the correct picada ID.
  location.href = `./index2.html?id=${picadas.id}`;
}