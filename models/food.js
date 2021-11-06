import mongoose from 'mongoose'



const foodSchema = new mongoose.Schema({
  food: {type: String, required: true},
  restaurant: {type: String, required: true},
  rating: {type: String, required: true},
}, {
  timestamps: true
})

const Food = mongoose.model('Food', foodSchema)

export {
  Food
}