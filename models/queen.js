import mongoose from 'mongoose'

const Schema = mongoose.Schema

const queenSchema = new Schema({
  dragName: String,
  city: String,
  season: Number,
  episodeEliminated: Number,
  owner: {type: Schema.Types.ObjectId, 'ref': "Profile"}
})

const Queen = mongoose.model('Queen', queenSchema)

export {
  Queen
}