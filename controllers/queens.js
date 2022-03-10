import { Profile } from '../models/profile.js'
import { Queen } from '../models/queen.js'

function index(req, res) {
  Queen.find({})
  .then(queens =>  {
    queens = queens.sort((a, b) => {
      return parseInt(a.season) - parseInt(b.season)
    })
    console.log(queens)
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
  .populate("reads.author")
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
    req.body.author = req.user.profile._id
    queen.reads.push(req.body)
    queen.save(function(err) {
      res.redirect(`/queens/${queen._id}`)
    })
  })
}

function deleteQueen(req, res) {
 Queen.findByIdAndDelete(req.params.id, function(err, queen) {
   res.redirect("/queens")
 })
}

function addFavorite(req, res) {
  console.log('test')
  Profile.findById(req.params.profileId)
  .then(profile => {
    Queen.findById(req.params.queenId)
    .then(queen => {
      if(profile.favorites.includes(req.params.queenId)) {
        console.log('You have already favorited this queen!')
        res.redirect(`/queens/${req.params.queenId}`)
      } else {
        profile.favorites.push(req.params.queenId)
        profile.save()
        res.redirect(`/queens/${req.params.queenId}`)
      }
    }).catch(err => {
    console.log(err)
    res.redirect(`/queens`)
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
  deleteQueen,
  addFavorite,
}