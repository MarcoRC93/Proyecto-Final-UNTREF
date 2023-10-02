fetch("./picadas.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("picadas", JSON.stringify(datos));

    const divPicadas = document.getElementById("granContenedor");
    const datosPicadas = JSON.parse(localStorage.getItem("picadas"));
    console.log(datosPicadas);

    if (datosPicadas) {

      const contenedorPrincipal1 = document.createElement("div");
      contenedorPrincipal1.classList.add("contenedorPrincipal");


      const contenedorPrincipal2 = document.createElement("div");
      contenedorPrincipal2.classList.add("contenedorPrincipal");

      datosPicadas.picadas.forEach((picadas, index) => {
        const divItem = document.createElement("div");
        divItem.classList.add("div-item");
        divItem.innerHTML = `
          <img src="${picadas.imagen}" alt="${picadas.nombre}">
          <h3>${picadas.nombre}</h3>
          <h5>Precio: ${picadas.precio}</h5>
          <button class="ver-mas">Ver Más</button>
          <button class="agregar-carrito">Agregar al carrito</button>`;

        divItem.addEventListener("click", () => {
          mostrarDetallesPicadas(picadas);
        });


        if (index < 3) {

          contenedorPrincipal1.appendChild(divItem);
        } else if (index < 6) {

          contenedorPrincipal2.appendChild(divItem);
        } else {

        }
      });


      divPicadas.appendChild(contenedorPrincipal1);
      divPicadas.appendChild(contenedorPrincipal2);
    }
  });

function mostrarDetallesPicadas(picadas) {

  location.href = `./index2.html?id=${picadas.id}`;
}