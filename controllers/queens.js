import { Queen } from '../models/queen.js'

function index(req, res) {
  Queen.find({})
  .then(queens =>  {
    res.render('queens/index', {
      queens,
      title: 'The Queens'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/tacos")
  })
}

export {
  index
}