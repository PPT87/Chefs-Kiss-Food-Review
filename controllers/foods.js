import { Food } from '../models/food.js'

function index(req, res) {
  // Find all tacos
  Food.find({})
  // When we have all the tacos
  .then(foods => {
    // Do something with the tacos
    res.render("foods/index", {
      title: "All Foods",
      foods,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/foods")
  })
}

function newFood(req, res) {
  console.log("Add New Food")
  res.render('foods/new', {
    title: "Enter New Food",
  })
}

function createFood(req, res){
  Food.create(req.body)
  .then(food =>{
    res.redirect('/foods')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/foods')
  })
}

function show(req, res) {
  Food.findById(req.params.id)
  .then(food => {
    res.render("foods/show", {
      food,
      title: "Details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/foods")
  })
}

export {
  index,
  newFood as new,
  createFood,
  show,
}