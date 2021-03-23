  
const express = require('express')
const routes = express.Router()
const cardsController = require('./controller/cardController')

routes.get('/cards', cardsController.getCards)

routes.delete('/cards', cardsController.delCards)

routes.post('/cards', cardsController.createCards)

routes.put('/cards', cardsController.updateCard)



module.exports = routes;