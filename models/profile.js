import mongoose from 'mongoose'

// const favoriteSchema = new mongoose.Schema({

// })



const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Queen', unique: true }],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
