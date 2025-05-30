
export async function obtenerPersonajesPorIds(ids) {
    try {
        //Se buscan los personajes por los ids que se encuentran en el json.
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(',')}`);
        const data = await respuesta.json();
        
        // La API devuelve un objeto si es uno solo, o un array si son varios.
         return Array.isArray(data) ? data : [data];

    } catch (error) {
        console.log(`Error en conexión con la API: ${error}`);
    }
    
}