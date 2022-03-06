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
  req.body.owner = req.user.profile._id
  Queen.create(req.body)
  .then(queen => {
    res.redirect('/queens')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/queens')
  })
}

function show(req, res) {
  Queen.findById(req.params.id)
  .populate("owner")
  .then(queen => {
    res.render('queens/show', {
      title: 'All About This Queen',
      queen,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/queens')
  })
}

function edit(req, res) {
  Queen.findById(req.params.id)
  .then(queen => {
    res.render('queens/edit', {
      title: 'Edit Queen',
      queen
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/queens')
  })
}

function update(req, res) {
  Queen.findById(req.params.id)
  .then(queen => {
    if(queen.owner.equals(req.user.profile._id)) {
      queen.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/queens/${queen._id}`)
      })
    } else {
      throw new Error ('NOT AUTHORIZED')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/queens')
  })
}

function createRead(req, res) {
  Queen.findById(req.params.id, function(err, queen) {
    queen.reads.push(req.body)
    queen.save(function(err) {
      res.redirect(`/queens/${queen._id}`)
    })
  })
}

export {
  index,
  newQueen as new,
  create,
  show,
  edit,
  update,
  createRead,
}