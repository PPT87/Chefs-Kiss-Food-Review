import mongoose from 'mongoose'

const Schema = mongoose.Schema

const foodSchema = new mongoose.Schema({
  food: {type: String, required: true},
  restaurant: {type: String, required: true},
  rating: {type: String, required: true},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Food = mongoose.model('Food', foodSchema)

export {
  Food
}