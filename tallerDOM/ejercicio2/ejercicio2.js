const $lista = document.getElementById("lista");

for (let i = 1; i<=5; i++) {
    const $item = document.createElement("li");
    $item.textContent = `Elemento ${i}`;

    if (i === 3) {
        $item.classList.add('resaltado');
    }

    $lista.appendChild($item);
}