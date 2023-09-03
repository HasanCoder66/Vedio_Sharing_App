import express from 'express'
import {addVideo , updateVideo , deleteVideo, getVideo ,viewVideo ,trendVideo , randomVideo ,subcribeVideo} from '../controllers/videoController.js'
import { verifyToken } from '../verifyToken.js'


const videoRouter = express.Router()

//  MIDDLEWARES 
videoRouter.post('/video',verifyToken, addVideo)
videoRouter.put('/:id',verifyToken, updateVideo)
videoRouter.delete('/:id',verifyToken, deleteVideo)
videoRouter.get('/find/:id', getVideo)
videoRouter.get('/view/:id', viewVideo)
videoRouter.get('/trendvideo/:id', trendVideo)
videoRouter.get('/randomvideo/:id', randomVideo)
videoRouter.get('/subvideo/:id', verifyToken, subcribeVideo)




export default videoRouter