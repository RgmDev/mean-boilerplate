'use strict'

const mongoose = require('mongoose')
const app = require('./app.js')
const port = process.env.PORT || 3977

mongoose.connect('mongodb://localhost:27017/mean_stack', (err, res) => {
    if(err){
      throw err
    }else{
      console.log('La base de datos esta conectada bien.')
      app.listen(port, () => {
        console.log('Servidor corriendo http://localhost:3977')
      })
    }
  }
);
