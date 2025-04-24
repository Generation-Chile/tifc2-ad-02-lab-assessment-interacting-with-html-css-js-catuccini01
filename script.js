let elementoPadre = document.getElementById("rojo");
elementoPadre.textContent = "Adiós";

document.getElementById("naranjo").style.color = "orange";

let nuevoEncabezado = document.createElement("h2");
nuevoEncabezado.textContent = "Este es un nuevo encabezado";
nuevoEncabezado.onclick = function () {
    this.style.color = "maroon";
};

elementoPadre.after(nuevoEncabezado); 