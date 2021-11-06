import mongoose from 'mongoose'



const foodSchema = new mongoose.Schema({
  food: String,
  restaurant: String,
  rating: String,
}, {
  timestamps: true
})

const Food = mongoose.model('Food', foodSchema)

export {
  Food
}