'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const secret = 'clave_secreta_para_jwt'

exports.ensureAuth = function(req, res, next){

  if(!req.headers.authorization){
    return res.status(403).send({message: 'La peticion no tiene cabecera authorization'})
  }
  let token = req.headers.authorization.replace(/['"]+/g, '')
  let payload
  try{
    payload = jwt.decode(token, secret)
  }catch(ex){
    console.log(ex)
    return res.status(401).send({message: ex.message})
  }

  req.user = payload

  next()

}