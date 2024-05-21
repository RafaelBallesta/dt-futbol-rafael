// Imports de paquete
const express = require('express');
const bodyParser = require('body-parser');

// Inicio de la aplicación
const app = express();

// Colección de mundiales
const MUNDIALES = [
  {
    "anio": 1998,
    "anfitrion": "Francia",
    "ganador": "Francia"
  },
  {
    "anio": 2002,
    "anfitrion": "Corea del Sur, Japon",
    "ganador": "Brasil"
  },
  {
    "anio": 2006,
    "anfitrion": "Alemania",
    "ganador": "Italia"
  },
  {
    "anio": 2010,
    "anfitrion": "Australia", // Error
    "ganador": "Espania"
  },
  {
    "anio": 2014,
    "anfitrion": "Brasil",
    "ganador": "Alemania"
  },
  {
    "anio": 2018,
    "anfitrion": "Rusia",
    "ganador": "Francia"
  },
  // Falta el de Catar 2022
]

// Definición de rutas
// - Una ruta GET para obtener los mundiales que tenga registrados (la lista actual)
app.get('/mundiales', (req, res) => {
  res.json(MUNDIALES)
})
// - Una ruta POST que me permita registrar un nuevo mundial (falta el de Catar por ejemplo)
app.post('/mundiales/agregar/mundial/arg', (req, res) => {
  const Catar = {
      "anio": 2022,
      "anfitrion": "Catar",
      "ganador": "Argentina"
  }
  const actualizacion = MUNDIALES.push(Catar);
  res.send({actualizacion})
})

app.post('/mundiales/agregar/mundial/:anio/:anfitrion/:ganador', (req, res) => {
  const { anio, anfitrion, ganador } = req.params;
  const nuevoMundial = {
    anio: Number(anio),
    anfitrion,
    ganador
  }
  MUNDIALES.push(nuevoMundial)
  res.json(MUNDIALES)
})

// - Una ruta PATCH que me permita actualizar un mundial que exista (el de 2010 no fue en Australia)
app.patch('/mundiales/actualizar/mundial/:anio', (req, res) => {
  const { anio } = req.params;
  const mundialIndex = MUNDIALES.findIndex(mundial => mundial.anio === Number(anio))

  if (mundialIndex !== -1) {
    MUNDIALES[mundialIndex].anfitrion = 'Sudafrica'
    res.json(MUNDIALES[mundialIndex])
  }else{
    res.status(404).send('Mundial no encontrado')
  }
})

// - Una ruta DELETE que me permita borrar un mundial que exista (borremos el primero que es el más viejo)
app.delete('/mundiales/borrar/mundial/:anio', (req, res) => {
  const { anio } = req.params;
  const mundialIndex = MUNDIALES.findIndex(mundial => mundial.anio === Number(anio))

  if (mundialIndex !== -1) {
    const mundialEliminado = MUNDIALES.splice(mundialIndex, 1)
  }else{
    res.status(404).send('Mundial no encontrado')
  }
})

// <- Aquí van ustedes

// Servidor comienza a escuchar peticiones
const PORT = 4000

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Escuchando peticiones en el puerto ${PORT}...`)
})