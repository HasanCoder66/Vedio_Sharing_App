import { createError } from "../error.js"
import User from "../models/userSchema.js"



// UpdateUser
// localhost:8000/api/:id 
export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body

      }, { new: true })
      res.status(200).json(updatedUser)
    } catch (error) {
      next(error)
    }
  } else {
    return next(createError(403, 'you can update only your account'))
  }
}

// deleteUser
// localhost:8000/api/:id 
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json('account has been deleted')
    } catch (error) {
      next(error)
    }
  } else {
    return next(createError(403, 'you can Delete only your account'))
  }
}


// getUser
// localhost:8000:api/find/:id
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}



// subscribeUser
// localhost:8000:api/find/:id
export const subscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id,{
      $push :{subscribedUsers: req.params.id},
    });
    await User.findByIdAndUpdate(req.params.id,{
      $inc : { subscribers :1},
    });
    res.status(200).json('subscription Successfully')
  } catch (error) {
    next(error)
  }
}


// unSubscribe a user 
// localhost:8000:user/unsub/:id
export const unSubscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id,{
      $pull :{subscribedUsers: req.params.id},
    });
    await User.findByIdAndUpdate(req.params.id,{
      $inc : { subscribers :-1},
    });
    res.status(200).json('unSubscription Successfully')
  } catch (error) {
    next(error)
  }
}




export const likeVideo = async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}



export const dislikeVideo = async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}


