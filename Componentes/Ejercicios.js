const express = require('express');

const app = express();

app.get('/', (req, res) => (res.send('Bienvenido a mi servidor')));
app.get('/messages/:mensage', (req, res) => {
    const { mensage } = req.params;
    res.send("Su mensaje es: " + mensage);
});
app.get('/error', (req, res) => res.status(400).send('Mensaje de error'));

app.get('/include/:texo/:cadena', (req, res) => {
    const texto = req.params.texo;
    const cadena = req.params.cadena;

    if (cadena.includes(texto)) {
        res.send(`La cadena ${cadena} incluye el texto ${texto}`);
    } else {
        res.send(`La cadena ${cadena} no incluye el texto ${texto}`);
    }

});


const PORT = 3005;
app.listen(PORT, () => console.log('Server running on port 3005'));