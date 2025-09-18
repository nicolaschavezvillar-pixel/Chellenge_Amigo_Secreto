# Amigo Secreto
![Portada del Proyecto](assets/LUFFY_AMIGO_SECRETOv2_1600x.webp)  

Aplicación web simple en HTML, CSS y JavaScript para agregar nombres y sortear un amigo aleatoriamente.


## 🏅 Insignias
![Estado del Proyecto](https://img.shields.io/badge/estado-completado-brightgreen)

![Licencia](https://img.shields.io/badge/licencia-MIT-green)

## 📑 Índice
1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Estado del Proyecto](#-estado-del-proyecto)
3. [Demostración](#-demostración)
4. [Acceso al Proyecto](#-acceso-al-proyecto)
5. [Características](#-características)
6. [Requisitos](#-requisitos)
7. [Instalación y ejecución](#-instalación-y-ejecución)
8. [Estructura del Proyecto](#-estructura-del-proyecto)
9. [Uso](#-uso)
10. [Solución de Problemas](#-solución-de-problemas)
11. [Tecnologías](#-tecnologías)
12. [Personas Contribuyentes](#-personas-contribuyentes)
13. [Autor](#-autor)
14. [Licencia](#-licencia)

## 📖 Descripción del Proyecto
Aplicación creada como práctica de JavaScript DOM.  
Permite ingresar nombres en una lista y realizar un sorteo aleatorio para elegir un “amigo secreto”.


## 📌 Estado del proyecto
🚧 Finalizado – Versión Final.  


---

## 🔗 Acceso al Proyecto
- [Repositorio en GitHub](https://github.com/nicolaschavezvillar-pixel/Challenge_Amigo_Secreto)  
- [Versión en línea (GitHub Pages)](https://nicolaschavezvillar-pixel.github.io/Challenge_Amigo_Secreto/)  

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
   git clone https://github.com/nicolaschavezvillar-pixel/Chellenge_Amigo_Secreto.git
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

## 🙌 Contribuidores
## 🙌 Contribuidores
- [Nicolás Chávez Villar](https://github.com/nicolaschavezvillar-pixel)



## Autor
| [<img src="assets/nico.png" width=115><br><sub>Nicolas Chavez Villar</sub>](https://github.com/nicolaschavezvillar-pixel) |
| :---: | 



📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.
---



