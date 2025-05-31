import {obtenerTodosPersonajes} from './Api.js'

crearOption();

document.getElementById("form-registro").addEventListener("submit",async(e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const dimension = document.getElementById("dimension").value;
    const autoridad = document.getElementById("autoridad").value;
    const personajesStr = document.getElementById("personajes");
    const personajesIds = Array.from(personajesStr.selectedOptions).map(opt => parseInt(opt.value));

    let nuevoInvestigador = {
    nombre,
    dimension,
    autoridad,
    personajesIds
    };
    
 
     try {
    const response = await fetch("http://localhost:3000/investigadores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoInvestigador)
    });

    if (response.ok) {
      alert("¡Investigador registrado con éxito!");
    } else {
      alert("Error al registrar el investigador");
    }
  } catch (error) {
    console.error("Error al hacer POST:", error);
    alert("Error en la conexión con el servidor");
  }

 });

  async function crearOption(){
    const select = document.getElementById("personajes");

    const personajes = await obtenerTodosPersonajes();

   if (Array.isArray(personajes)) {
    personajes.forEach(p => {
      const option = document.createElement("option");
      option.value = p.id;
      option.textContent = p.name;
      select.appendChild(option);
    });
  } else {
    console.log("No llegaron personajes desde la API");
  }
  }



  
