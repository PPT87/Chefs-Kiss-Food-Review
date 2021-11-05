import { Food } from '../models/food.js'

function newFood(req, res) {
  console.log("Add New Food")
  res.render('foods/new', {
    title: "Enter Food",
    
  })
}

export {
  newFood as new,
}