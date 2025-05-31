 🧪 Rick & Morty Investigadores - Proyecto Final

Este es un proyecto web que permite registrar y visualizar investigadores del universo de Rick and Morty, asociando cada uno con personajes obtenidos desde la API oficial.
![Captura de pantalla 2025-05-31 190146](https://github.com/user-attachments/assets/61b0be5f-092b-4709-a07b-1e74b3236372)
![Captura de pantalla 2025-05-31 190120](https://github.com/user-attachments/assets/f75b5621-2dc1-43cb-9b95-e5e3d28723f5)



🚀 Funcionalidades

* Ver una lista de investigadores con sus datos y personajes asociados.
* Registrar nuevos investigadores indicando:

  * Nombre
  * Dimensión
  * Nivel de autoridad
  * Selección de personajes (IDs o nombres)
* Guardado de datos local con `json-server`.

🛠️ Tecnologías usadas

* HTML, CSS y JavaScript
* Fetch API
* Rick and Morty API pública (`https://rickandmortyapi.com`)
* json-server (para simular una base de datos local)

📦 Instalación

1. Clonar este repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

2. Instalar `json-server` si no lo tenés:

```bash
npm install -g json-server
```

3. Ejecutar el servidor:

```bash
json-server --watch investigadores.json
```

Esto crea un servidor local en: `http://localhost:3000/investigadores`

4. Abrí el archivo `index.html` en tu navegador para ver la aplicación.

 📁 Estructura del proyecto

```
/ProyectoFinal
│
├── index.html             # Página principal con listado de investigadores
├── registro.html          # Formulario para registrar investigadores
├── investigadores.json    # "Base de datos" simulada
├── /js
│   ├── Api.js             # Funciones para consumir la API externa
│   ├── Registro.js        # Lógica para registrar un investigador
│   ├── main.js            # Carga y renderiza la lista en el index
│   ├── Personaje.js       # Clase Personaje
│   └── Investigador.js    # Clase Investigador
├── /img                   # Imágenes
└── /style.css             # Estilos visuales
```

🧠 Autor

* Nombre: Rocio Daniela Benavidez 
* Proyecto final para la materia **EDI2** (2025)
