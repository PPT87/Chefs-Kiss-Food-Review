import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
  food: String,
  review: String,
  rating: String,
}, {
  timestamps: true
})

const Food = mongoose.model('Food', foodSchema)

export {
  Food
}