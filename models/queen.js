import mongoose from 'mongoose'

const Schema = mongoose.Schema

const readSchema = new Schema({
  content: String
}, {
  timestamps: true
})

const queenSchema = new Schema({
  dragName: {
    type: String,
    required: true,
  },
  city: String,
  season: Number,
  episodeEliminated: Number,
  owner: {type: Schema.Types.ObjectId, 'ref': "Profile"},
  reads: [readSchema],
}, {
  timestamps: true
})

const Queen = mongoose.model('Queen', queenSchema)

export {
  Queen
}