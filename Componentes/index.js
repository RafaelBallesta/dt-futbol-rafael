const jugadores = require('../3-jugador/jugador');
const lugaresJugadores = require('../5-posiciones/lugares');
const express = require('express');
const app = express();

app.get('/', (req, res) => (res.send('Hola Mundo')));
// jugadores --> devolver la lista de jugadores
app.get('/jugadores', (req, res) => (res.send(jugadores.retornar())));
app.get('/lugaresJugadores', (req, res) => (res.send(lugaresJugadores.retornarJuga())));

app.use("*",function(next, req, res) {
    res.status(404).send('¿Pero vos sos o te haces? acá no hay nada');
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port 3000'));