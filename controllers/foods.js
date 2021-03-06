import {
  Food
} from '../models/food.js'
import {
  Profile
} from '../models/profile.js'

function index(req, res) {
  Food.find({
      owner: req.user.profile._id
    })
    .then(foods => {
      res.render("foods/index", {
        title: "My Reviews",
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
    owner: req.user.profile._id,
  })
}

function createReview(req, res) {
  req.body.owner = req.user.profile._id
  Food.create(req.body)
    .then(food => {
      food.reviews.push(req.body)
      food.save()
      Profile.updateOne({
        _id: food.owner
      }, {
        $push: {
          food: food
        }
      })
      res.redirect('/foods')
    })
    .catch(err => {
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
  Food.findById(req.params.id)
    .then(food => {
      if (food.owner.equals(req.user.profile._id)) {
        food.delete()
          .then(() => {
            res.redirect("/foods")
          })
      } else {
        throw new Error("Not Authorized")
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
      food.updateOne(req.body, {
          new: true
        })
        .then(() => {
          res.redirect(`/foods/${food._id}`)
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/foods")
    })
}

function edit(req, res) {
  Food.findById(req.params.id)
    .then(food => {
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

function addReview(req, res) {
  Food.findById(req.params.id)
    .then(food => {
      food.reviews.push(req.body)
      food.save(() => {
        res.redirect(`/foods/${food._id}`)
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
  createReview,
  show,
  deleteFood as delete,
  edit,
  update,
  addReview,
}