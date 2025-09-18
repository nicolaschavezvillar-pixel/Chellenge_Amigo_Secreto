# Amigo Secreto
Aplicación web simple en HTML, CSS y JavaScript para agregar nombres y sortear un amigo aleatoriamente.

## Características
- Agregar nombres a una lista.
- Mostrar la lista en pantalla sin duplicados.
- Sortear un nombre al azar.

## Requisitos
- Navegador web moderno (Chrome, Firefox, Edge o Safari).
- No requiere instalación de dependencias ni servidores externos.

## Instalación y ejecución
1. Clona el repositorio:
   ```bash
   git clone https://github.com/nicolaschavezvillar-pixelio/Chellenge_Amigo_Secreto.git
   cd Chellenge_Amigo_Secreto
   ```

## 📂 Estructura del proyecto
```bash
/assets # Imágenes e íconos del proyecto
app.js # Contiene la lógica del sorteo y manejo del DOM
style.css # Define los estilos y colores
index.html # Página principal que une todo
README.md # Este archivo de documentación
```

## ▶️ Uso
1. Escribe un nombre en el campo de texto.
2. Haz clic en el botón **Añadir** para incorporarlo a la lista.
3. Repite este proceso hasta ingresar todos los participantes.
4. Haz clic en **Sortear amigo**.
5. Se mostrará en pantalla el nombre elegido aleatoriamente como “amigo secreto”.

## 🐞 Solución de problemas
- **No se ven los nombres en la lista**: revisa que `app.js` esté correctamente enlazado en `index.html` con `<script src="app.js" defer></script>`.
- **El botón “Añadir” no hace nada**: asegúrate de que la función `agregarAmigo()` esté definida en `app.js` y disponible globalmente.
- **El sorteo no muestra resultado**: debes tener al menos un nombre agregado antes de presionar “Sortear amigo”.
- **Se agregan nombres duplicados**: el código ya incluye una validación que muestra un mensaje si el nombre ya existe.

## 🛠️ Tecnologías
- HTML5
- CSS3
- JavaScript (Vanilla)
- Visual Studio Code (editor recomendado)

## 👨‍💻 Autor
Proyecto desarrollado por [Nicolás Chávez Villar](https://github.com/nicolaschavezvillar-pixelio).

## 📄 Licencia
Este proyecto se distribuye bajo la licencia MIT.


