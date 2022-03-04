import mongoose from 'mongoose'

const Schema = mongoose.Schema

const queenSchema = new Schema({
  dragName: String,
  city: String,
  season: Number,
  episodeEliminated: Number
})

const Queen = mongoose.model('Queen', queenSchema)

export {
  Queen
}