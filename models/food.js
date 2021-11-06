import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: String,
}, {
  timestamps: true
})


const foodSchema = new Schema({
  food: String,
  restaurant: String,
  rating: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: [reviewSchema]
}, {
  timestamps: true
})

const Food = mongoose.model('Food', foodSchema)

export {
  Food
}