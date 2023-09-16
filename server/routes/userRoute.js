import express from 'express'
import {updateUser , deleteUser , getUser, likeVideo, subscribeUser, unSubscribeUser, dislikeVideo} from '../controllers/userController.js'
import { verifyToken } from "../verifyToken.js";

const userRouter = express.Router()



//  MIDDLEWARES 

// update User 
// localhost:8000/api/:id 
userRouter.put('/:id', verifyToken, updateUser)

// delete user
// localhost:8000/api/:id 
userRouter.delete('/:id', verifyToken, deleteUser)

// get a user 
// localhost:8000:api/find/:id
userRouter.get('/find/:id', getUser)

// like a video

userRouter.put('/like/:videoId', verifyToken, likeVideo)

// dislike a video

userRouter.put('/dislike/:videoId', verifyToken, dislikeVideo)  

// subscribe a user 
// localhost:8000:api/sub/:id
userRouter.put('/sub/:id', verifyToken, subscribeUser)

// unSubscribe a user 
// localhost:8000:api/unsub/:id
userRouter.put('/unsub/:id', verifyToken, unSubscribeUser)

// 


export default userRouter