const cards = require('../helpers/cards')


const data = cards.loadLists()

module.exports = {
  async getCards(req,res) {
    res.json({data: data})
  }, 
  async delCards(req,res) {
    const{id} = req.body
    const cardExist = data.find(card => card.id === id)
    if (!cardExist) {
      return res.status(404).json({error:'Card not found'}) 
    }
    const listIndex = data.findIndex(card => card.id === id )
    data.splice(listIndex,1)
    return res.json({
        data:data
    })
  },
  async createCards(req,res) {
    const {title,price,image} = req.body
    const lastItem = data[data.length -1 ]
    const id = lastItem.id + 1 
    const newCard = {
            id,
            title,
            price,
            image
        }
    data.push(newCard)
    return res.json({
    data:data
  })
  },
  async updateCard(req,res){
    const {id,title,price,image} = req.body
    const updateCard = {
      id,
      title,
      price,
      image
    }
    const index = data.findIndex(card => card.id == id)
    data[index] = updateCard
    res.json({data:data})
    
    
  }



}