/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

const jugadores = [{
    nombre: "Nahitan",
    apellido: "Nández",
    apodo: "",
    fechaDeNacimiento: "1995-12-28"
},
    {
        nombre: "Federico",
        apellido: "Valverde",
        apodo: "Pajarito",
        fechaDeNacimiento: "1998-07-22"
    }]

function edad(fechaDeNacimiento) {
    const fechaNacimiento = new Date(fechaDeNacimiento);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    return edad;
}

jugadores.forEach(jugador => {
    console.log(`${jugador.nombre} "${jugador.apodo}" ${jugador.apellido} (${edad(jugador.fechaDeNacimiento)} años)`);
});