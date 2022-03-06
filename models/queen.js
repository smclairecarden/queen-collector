import mongoose from 'mongoose'

const Schema = mongoose.Schema

const readSchema = new Schema({
  content: String
}, {
  timestamps: true
})

const queenSchema = new Schema({
  dragName: String,
  city: String,
  season: Number,
  episodeEliminated: Number,
  owner: {type: Schema.Types.ObjectId, 'ref': "Profile"},
  reads: [readSchema]
})

const Queen = mongoose.model('Queen', queenSchema)

export {
  Queen
}