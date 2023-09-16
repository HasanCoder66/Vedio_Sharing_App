import express from 'express'

import {addComment, deleteComment, comments } from '../controllers/commentController.js'
import { verifyToken } from '../verifyToken.js'
const commentRouter = express.Router()

//  MIDDLEWARES 
commentRouter.post('/addComment',   verifyToken ,addComment)
commentRouter.delete('/deleteComment:id',  verifyToken , deleteComment)
commentRouter.get('/comment/:id', verifyToken , comments )




export default commentRouter