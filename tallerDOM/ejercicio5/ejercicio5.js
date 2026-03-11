    const contenedor = document.getElementById('contenedor-tarjetas');
    const tarjetaOriginal = document.getElementById('tarjeta-original');
    const btnClonar = document.getElementById('btn-clonar');
    const MAX_CLONES = 5;

    let numClones = 0;

    btnClonar.addEventListener('click', () => {
      if (numClones >= MAX_CLONES) return;

      numClones++;

      // Clonar el nodo con todos sus hijos (deep = true)
      const clon = tarjetaOriginal.cloneNode(true);

      // Eliminar el ID para evitar duplicados
      clon.removeAttribute('id');

      // Insertar al final del contenedor
      contenedor.appendChild(clon);

      if (numClones >= MAX_CLONES) {
        btnClonar.disabled = true;
      }
    });