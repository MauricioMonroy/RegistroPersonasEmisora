# RegistroPersonasEmisora
Programa de registro de datos

Este programa registra los datos de una persona, como nombre completo, cédula, fecha de nacimiento, ciudad de residencia, ciudad de origen, artista favorito, canción 1, canción 2, canción 3. Además, otorga un número aleatorio del 1 al 100 a cada registro.

Se utiliza un archivo persona.js para los métodos que registran los datos, y otro app.js que se encarga de las funciones; ambos se incluyen en el directorio js.

Funciones

    agregarRegistro(): Agrega un registro a la base de datos.
    mostrarPersonas(): Muestra la lista de registros en la base de datos.

Ejemplo de uso

javascript
// Agregar un registro
agregarRegistro({
nombreCompleto: "Juan Pérez",
cedula: "1234567890",
fechaNacimiento: "2000-01-01",
ciudadResidencia: "Pitalito",
ciudadOrigen: "Manizales",
artistaFavorito: "Soda Estéreo",
cancion1: "En la ciudad de la furia",
cancion2: "Persiana americana",
cancion3: "De música ligera",
});

// Mostrar la lista de registros
mostrarPersonas();

## HTML

El programa se despliega en un navegador web. El HTML se utiliza para crear la interfaz de usuario.

El HTML de la página principal es el siguiente:

<!DOCTYPE html>
<html lang="es">
...
</html>

Este HTML crea una página web básica con un título y un cuerpo. El cuerpo de la página contiene un formulario y un botón para guardar los datos.

El HTML del formulario es el siguiente:

<form id="forma">
...
</form>


Este HTML crea un formulario con los siguientes campos:

* **Nombre completo**
* **Cédula**
* **Fecha de nacimiento**
* **Correo electrónico**
* **Ciudad de residencia**
* **Ciudad de origen**
* **Artista favorito**
* **Canción 1**
* **Canción 2**
* **Canción 3**

El HTML de la tabla de resultados es el siguiente:

<table class="contenedor table" id="filaPersona">
...
</table>

Este HTML crea una tabla con los siguientes encabezados:

    Nombre completo
    Cédula
    Fecha de nacimiento
    Correo electrónico
    Ciudad de residencia
    Ciudad de origen
    Artista favorito
    Canción 1
    Canción 2
    Canción 3
    Número aleaotorio

CSS

El programa utiliza CSS para crear la interfaz de usuario. La hoja de estilo CSS se incluye en el directorio css.

Para instalar la hoja de estilo CSS, se copia el archivo estilos.css en el directorio raíz del programa.

Para personalizar la interfaz de usuario, se puede editar la hoja de estilo CSS.

Aquí algunos ejemplos de cómo usar el CSS para personalizar la interfaz de usuario:

    Para cambiar el color de fondo de la página, se puede modificar la siguiente línea de código:

css
html {
background-color: #2196f3;
}


* **Para cambiar el color del texto del título, se puede modificar la siguiente línea de código:**

```css
h1 {
  color: #fff;
}


* **Para cambiar el tamaño de la fuente de los campos de texto, se puede modificar la siguiente línea de código:**

css
.formulario input {
  font-size: 18px;
}```

Contacto

Para obtener m+as ayuda con este programa, se puede comunicar con el autor a [mauricio.monroy0@soy.sena.edu.co].

Autor
[Mauricio Alberto Monroy Calle]
