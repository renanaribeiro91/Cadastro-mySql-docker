const { Router } = require('express')

const routes = Router()

routes.get('/',(req,res)=>{return console.log('Acessando rota get')})

module.exports = routes