
export class Investigador{
constructor(nombre, dimension, autoridad, personajes = []){
    this.nombre = nombre;
    this.dimension = dimension;
    this.autoridad = autoridad;
    this.personajes = personajes;
}
}