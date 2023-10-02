fetch("./picadas.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("picadas", JSON.stringify(datos));

    const divPicadas = document.getElementById("granContenedor");
    const datosPicadas = JSON.parse(localStorage.getItem("picadas"));
    console.log(datosPicadas);

    if (datosPicadas) {
      // Crear el primer contenedor principal
      const contenedorPrincipal1 = document.createElement("div");
      contenedorPrincipal1.classList.add("contenedorPrincipal");

      // Crear el segundo contenedor principal
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

        // Agregar elementos a los contenedores según la lógica deseada
        if (index < 3) {
          // Los primeros 3 elementos se agregan al primer contenedor principal
          contenedorPrincipal1.appendChild(divItem);
        } else if (index < 6) {
          // Los siguientes 3 elementos se agregan al segundo contenedor principal
          contenedorPrincipal2.appendChild(divItem);
        } else {
          // Los elementos restantes se pueden manejar de acuerdo a tus necesidades
          // Puedes crear más contenedores o ajustar la lógica según tus requerimientos.
        }
      });

      // Agregar los contenedores principales al granContenedor
      divPicadas.appendChild(contenedorPrincipal1);
      divPicadas.appendChild(contenedorPrincipal2);
    }
  });

function mostrarDetallesPicadas(picadas) {
  // Aquí, deberías redirigir a la página de detalles con el ID correcto de la picada.
  location.href = `./index2.html?id=${picadas.id}`;
}