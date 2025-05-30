import { obtenerPersonajesPorIds } from "./Api.js";
import { Investigador } from "./Investigador.js";
import { Personaje } from "./Personaje.js";

fetch("http://localhost:3000/investigadores")
  .then(res => res.json())
  .then(async data => {
    const contenedor = document.getElementById("contenedor-cards");

    for (const inv of data) {
      // 1. Trae personajes desde la API
      const personajesApi = await obtenerPersonajesPorIds(inv.personajesIds);
      
      // 2. Crea instancias de Personaje
      const personajes = personajesApi.map(p => new Personaje(p));
      
      // 3. Crea el Investigador
      const investigador = new Investigador(inv.nombre, inv.dimension, inv.autoridad, personajes);

      // 4. Muestra en pantalla
      contenedor.appendChild(crearCard(investigador));
    }
  });

function crearCard(investigador) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${investigador.nombre}</h3>
    <p><strong>Dimensión:</strong> ${investigador.dimension}</p>
    <p><strong>Autoridad:</strong> ${investigador.autoridad}</p>
    <h3>Personajes amigos:</h3>
    <ul>
       ${investigador.personajes.map(p => `
      <li>
        <strong>${p.nombre}</strong> - ${p.especie} (${p.estado})<br>
         ${p.imagen ? `<img src="${p.imagen}" width="100"/>` : ''}
      </li>
      `).join("")}
    </ul>

  `;
  return card;
}
