import { Profile } from '../models/profile.js'

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
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render('profiles/show', {
        title: `${profile.name}'s Profile`,
        profile,
        isSelf,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

// function addQueen(req, res) {
//   Profile.findById(req.user.profile._id)
//   .then(profile => {
//     profile.queens.push(req.body.queen_id)
//     profile.save()
//     res.render('profile/show', {
//       title: `${profile.name}'s Profile`,
//       profile,
//       isSelf,
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/')
//   })
// }


export {
  index,
  show,
  // addQueen,
}