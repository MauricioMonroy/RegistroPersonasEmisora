//Función que captura los datos a alamcenar
function mostrarPersonas() {
  console.log("Mostrar personas...");

  // Crear una tabla
  const tabla = document.createElement("table");
  tabla.setAttribute("personas");

  // Agregar una fila de encabezado
  const filaEncabezado = document.createElement("tr");
  for (const campo of [
    "Nombre completo",
    "Cédula",
    "Fecha de nacimiento",
    "Correo electrónico",
    "Ciudad de residencia",
    "Ciudad de origen",
    "Artista favorito",
    "Canción 1",
    "Canción 2",
    "Canción 3",
  ]) {
    const celda = document.createElement("th");
    celda.textContent = campo;
    filaEncabezado.appendChild(celda);
  }
  tabla.appendChild(filaEncabezado);

  // Agregar una fila para cada persona
  for (const persona of personas) {
    const filaPersona = document.createElement("tr");
    for (const dato of Object.values(persona)) {
      const celda = document.createElement("td");
      celda.textContent = dato;
      filaPersona.appendChild(celda);
    }
    tabla.appendChild(filaPersona);
  }
}

//Agregar nuevo registro al formulario
function agregarRegistro() {
  const forma = document.forms["forma"];
  const nombreCompleto = forma["nombreCompleto"].value;
  const cedula = forma["cedula"].value;
  const fechaNacimiento = forma["fechaNacimiento"].value;
  const email = forma["email"].value;
  const ciudadResidencia = forma["ciudadResidencia"].value;
  const ciudadOrigen = forma["ciudadOrigen"].value;
  const artistaFavorito = forma["artistaFavorito"].value;
  const cancion1 = forma["cancion1"].value;
  const cancion2 = forma["cancion2"].value;
  const cancion3 = forma["cancion3"].value;

  if (
    nombreCompleto !== "" &&
    cedula !== "" &&
    fechaNacimiento !== "" &&
    email !== "" &&
    ciudadResidencia !== "" &&
    ciudadOrigen !== "" &&
    artistaFavorito !== "" &&
    cancion1 !== "" &&
    cancion2 !== "" &&
    cancion3 !== ""
  ) {
    const registro = {
      nombreCompleto,
      cedula,
      fechaNacimiento,
      email,
      ciudadResidencia,
      ciudadOrigen,
      artistaFavorito,
      cancion1,
      cancion2,
      cancion3,
    };

    mostrarRegistro(registro);
  } else {
    console.log("No hay información que agregar o no es válida");
  }
}

//Muestra en la tabla la información registrada en el formulario
function mostrarRegistro(registro) {
  const tabla = document.getElementById("filaPersona");

  const fila = document.createElement("tr");

  for (const campo in registro) {
    const celda = document.createElement("td");
    celda.textContent = registro[campo];
    fila.appendChild(celda);
  }

  tabla.appendChild(fila);
}

