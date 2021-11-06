import { Food } from '../models/food.js'

function index(req, res) {
  Food.find({})
  .then(foods => {
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
  Food.find({})
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
  .then(foods => {
    res.render("foods/show", {
      foods,
      title: "Details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/foods")
  })
}

function deleteFood(req, res) {
  Food.findByIdAndDelete(req.params.id)
  .then(food => {
    if (food.owner.equals(req.user.profile._id)) {
      food.delete()
      .then(() => {
        res.redirect("/foods")
      })
    } else {    
      throw new Error ("🚫 Not Authorized! 🚫")
    }
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
  deleteFood as delete
}