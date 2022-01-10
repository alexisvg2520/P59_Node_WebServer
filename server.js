const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); //rendiriza la vista 



app.get('/', (req, res) => {
    res.render('home', {
        nombre: "AleXis",
        titulo: "Home"
    });
});

app.get('/acerca', (req, res) => {
    res.render('acerca', {
        titulo: "Acerca"
    });
});

/*
app.get('/', (req, res) => {
    //res.send('Hola Mundo desde Express!!');

    let salida = {
        nombre: 'Alexis',
        edad: 29,
        url: req.url
    }

    res.send(salida);
})

app.get('/data', (req, res) => {
    res.send('data data data');
});*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});