let amigos = []

function agregarAmigo() {
    let input = document.getElementById("amigo").value;

    if (input.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
   
}
    if (amigos.includes(input)) {
    alert("Ese nombre ya fue agregado.");
    return;
}
  
  amigos.push(input);  // Añadir el nombre al array
  document.getElementById("amigo").value = "";  // Limpiar el campo de entrada

 console.log("Lista de amigos:", amigos);
    mostrarAmigos();  // Actualizar la lista en el DOM
}

function mostrarAmigos() {
    // Paso 2: obtener la <ul> del DOM
    const lista = document.getElementById("listaAmigos");

    // Paso 3: limpiar la lista antes de volver a pintarla
    lista.innerHTML = "";

    // Paso 4: recorrer el array e insertar cada nombre como <li>
    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento <li>
        const li = document.createElement("li");

        // Añadir el texto dentro del <li>
        li.textContent = amigos[i];

        // Insertar el <li> dentro de la lista <ul>
        lista.appendChild(li);
    }

    }

  function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Obtener un índice aleatorio entre 0 y (amigos.length - 1)
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Seleccionar el nombre en esa posición
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la consola (luego lo pondremos en el HTML)
    console.log("Amigo sorteado:", amigoSorteado);
}  
    

