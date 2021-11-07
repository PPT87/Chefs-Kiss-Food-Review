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
  req.body.owner = req.user.profile._id
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

function update(req, res) {
  Food.findByIdAndUpdate(req.params.id)
  .then(food => {
    // if(food.owner.equals(req.user.profile._id)){
      food.updateOne(req.body, {new: true})
      .then(()=>{
        res.redirect(`/foods/${food._id}`)
      })
    // } else{
    //   throw new Error ("Not Authorized!")
    // }
  })
  .catch(err => {
    console.log(err)
    res.redirect("/foods")
  })
}

function edit(req, res){
  console.log("updating food")
  console.log(req.params.id)
  Food.findById(req.params.id)
  .then(food =>{
    res.render('foods/edit', {
      title: "Edit Food",
      food
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/foods")
  })
}

function createRating(req, res){
  console.log("creating a review")
  Food.findById(req.params.id)
  .then(food => {
    food.reviews.push(req.body)
      food.save()
      res.redirect(`/foods/${food._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/foods")
  })
}

function createReview(req, res){
  console.log("creating a review")
}

export {
  index,
  newFood as new,
  createFood,
  show,
  deleteFood as delete,
  edit,
  update,
  createRating,
  createReview,
}