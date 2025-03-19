# Proyecto Flask y Node.js - Sitio Web Simple

Este proyecto contiene dos aplicaciones web dentro de la misma carpeta:
- **Flask (Python)** → Maneja una versión del sitio con Python.
- **Node.js con Express** → Otra versión del sitio con JavaScript.

Ambos comparten una estructura similar y permiten mostrar una caja de texto con eventos y cambios de color.

## 📌 Requisitos

### Para el servidor Flask:
- Python 3.x
- Flask

Instalar Flask con:
```sh
pip install flask
```

### Para el servidor Node.js:
- Node.js y npm (verifica con `node -v` y `npm -v`)
- Express.js

Instalar Express con:
```sh
npm install express
```

## 📂 Estructura del Proyecto
```
mi-tarea/
│── public/  # Archivos de Node.js (HTML, CSS, JS)
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│── server.js  # Servidor en Node.js con Express
│── python_flask/
│   ├── app.py  # Servidor Flask
│   ├── templates/
│   │   ├── index.html  # Versión Flask del sitio
│   ├── static/
│   │   ├── styles.css
│   │   ├── script.js
```

## 🚀 Cómo Ejecutar el Proyecto

### Ejecutar el servidor Flask
1. Abre una terminal en la carpeta `python_flask/`.
2. Ejecuta:
   ```sh
   python app.py
   ```
3. Accede a:
   ```
   http://127.0.0.1:5000
   ```

### Ejecutar el servidor Node.js
1. Abre otra terminal en la carpeta raíz `mi-tarea/`.
2. Ejecuta:
   ```sh
   node server.js
   ```
3. Accede a:
   ```
   http://localhost:3000
   ```

## 🎨 Funcionalidades
- **Ingresar texto en la caja y presionar Enter** → Aparece un modal con el texto ingresado.
- **Botón de cambio de color** → Alterna los colores del fondo y texto.

## 📌 Notas
Si los archivos CSS y JS no se cargan en Flask, verifica que estén en `static/` y que en `index.html` estén referenciados con:
```html
<link rel="stylesheet" href="{{ url_for('static', filename='styles.css') }}">
<script src="{{ url_for('static', filename='script.js') }}"></script>
```

---
_Proyecto desarrollado con Flask y Node.js 🚀_

