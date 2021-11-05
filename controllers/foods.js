import { Food } from '../models/food.js'

function index(req, res){
  console.log('home page request')
  res.render('foods/index',{
    title: "All Foods"
  })
}

function newFood(req, res) {
  console.log("Add New Food")
  res.render('foods/new', {
    title: "Enter Food",
  })
}

function create(req, res){
  console.log('creating a new food review')
  res.redirect('/foods')
}


export {
  index,
  newFood as new,
  create,
}