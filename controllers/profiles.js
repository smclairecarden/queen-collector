import { Profile } from '../models/profile.js'
import { Queen } from '../models/queen.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'Users'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  }) 
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('favorites')
  
  .then(self => {
    const isSelf = self._id.equals(req.params.profileId)
    console.log(req.params.profileId)
    res.render('profiles/show', {
      title: `${self}'s Profile`,
      profile: self,
      // queens,
      isSelf,
    })
  })
.catch(err => {
  console.log(err)
  res.redirect('/')
})
}

function showQueen(req, res) {
  Queen.findById(req.params.queenId)
  .populate(req.params.profileId)
    .then(queen => {
      res.render('profiles/show', {
        title: `${profile.name}'s Profile`,
        queen,
      })
    })
  }

function deleteFavorite(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.favorites.remove({_id:  req.params.id})
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function doubleFavorite(req, res) {
  if(profile.favorites === req.user.profile._id) {
    alert('This queen is already in your favorites!')
  }
}

export {
  index,
  show,
  showQueen,
  deleteFavorite,
  doubleFavorite,
}