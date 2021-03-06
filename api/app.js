'use strict'

const express = require('express')
const bodyParser = require('body-parser')

var app = express()

// cargar rutas
let userRoutes = require('./routes/user')
let artistRoutes = require('./routes/artist')
let albumRoutes = require('./routes/album')
let songRoutes = require('./routes/song')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// configurar cabeceras
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



// rutas base
app.use('/api', userRoutes)
app.use('/api', artistRoutes)
app.use('/api', albumRoutes)
app.use('/api', songRoutes)

app.get('/', (req, res) => {
  res.status(200).send({message: 'Bienvenido'})
})


module.exports = app