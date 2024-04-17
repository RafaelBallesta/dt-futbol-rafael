/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección información de los jugadores hasta el momento presentados
- imprima la información de los jugadores en el formato: {nombre} "{apodo}" {apellido} (edad) - {posiicion}.

¿Cómo puedo obtener de la colección solamente los que son mediocampistas?
*/

const jugador = [{
    nombre: "Nahitan",
    apellido: "Nández",
    apodo: "",
    fechaDeNacimiento: "1995-12-28",
    posicion: "mediocampista"
},
    {
        nombre: "Federico",
        apellido: "Valverde",
        apodo: "Pajarito",
        fechaDeNacimiento: "1998-07-22",
        posicion: "mediocampista"
    },
    {
        nombre: "Luciano",
        apellido: "Rodriguez",
        apodo: "Lucho",
        fechaDeNacimiento: "1995-12-28",
        posicion: "delantero"
    }
]

function edad(fechaDeNacimiento) {
    const fechaNacimiento = new Date(fechaDeNacimiento);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    return edad;
}

jugador.forEach(jugador => {
    if (jugador.posicion === "mediocampista") {
        console.log(`${jugador.nombre} "${jugador.apodo}" ${jugador.apellido} (${edad(jugador.fechaDeNacimiento)} años) - ${jugador.posicion}`);
    }
});