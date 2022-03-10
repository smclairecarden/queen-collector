import mongoose from 'mongoose'

const Schema = mongoose.Schema

const readSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
}, {
  timestamps: true
})

const queenSchema = new Schema({
  dragName: {
    type: String,
    required: true,
    unique: true,
  },
  city: String,
  season: String,
  episodeEliminated: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  reads: [readSchema],
}, {
  timestamps: true
})

const Queen = mongoose.model('Queen', queenSchema)

export {
  Queen
}