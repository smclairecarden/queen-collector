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

function newQueen(req, res) {
  res.render('queens/new', {
    title: 'Add A Queen'
  })
}

function create(req, res) {
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  }
  const queen = new Queen(req.body)
  queen.save(function(err) {
    if (err) {
      return res.redirect('queens/new', 
      {err:null, title:'Add Queen'})
    }
    res.redirect(`/queens/${queen._id}`)
  })
}

function show(req, res) {
  Queen.findById(req.params.id, function (err, queen) {
    res.render('queens/show', {
      title: 'All About This Queen',
      queen: queen,
    })
  })
}

export {
  index,
  newQueen as new,
  create,
  show,
}