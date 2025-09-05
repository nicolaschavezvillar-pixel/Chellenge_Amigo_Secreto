let amigos = []
function agregarAmigo() {
    let input = document.getElementById("amigo").value;
    console.log(input); 
}
function agregarAmigo() {
    let input = document.getElementById("amigo").value;

    if (input.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
   
}
 amigos.push(input);  // Añadir el nombre al array
 
 document.getElementById("amigo").value = "";  // Limpiar el campo de entrada

 console.log("Lista de amigos:", amigos);
}
