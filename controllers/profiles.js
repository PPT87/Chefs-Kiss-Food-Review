import { Food } from "../models/food.js"
import { Profile } from "../models/profile.js"


function index(req, res){
  Profile.find({})
  .then(profiles =>{
    res.render('profiles/index', {
      profiles,
      title: 'Community'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then((profile) => {
    Food.find({owner:profile._id})
    .then(food => {
      Profile.findById(req.user.profile._id)
      .then(self => {
        const isSelf = self._id.equals(profile._id)
        res.render("profiles/show", {
          profile,
          title: `${profile.name}'s Food Reviews`,
          self,
          isSelf,
          food,
        })
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export{
  index,
  show,
}