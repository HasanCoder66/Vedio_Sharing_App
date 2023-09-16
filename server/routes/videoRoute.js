import express from 'express'
import { addVideo, updateVideo, deleteVideo, getVideo, viewVideo, trendVideo, randomVideo, subVideo, tagsVideo, searchVideo} from '../controllers/videoController.js'
import { verifyToken } from '../verifyToken.js'


const videoRouter = express.Router()

//  MIDDLEWARES 


// addVedio api 
// localhost:8000/api/video
videoRouter.post('/video', verifyToken, addVideo)


// updateVedio api 
// localhost:8000/ved/:id
videoRouter.put('/:id', verifyToken, updateVideo)


// deleteVedio api 
// localhost:8000/ved/:id
videoRouter.delete('/:id', verifyToken, deleteVideo)


// getVedio api 
// localhost:8000/ved/find/:id
videoRouter.get('/find/:id', getVideo)


// viewVedio api 
// localhost:8000/ved/view/:id
videoRouter.get('/view/:id', viewVideo)


// trendVedio api 
// localhost:8000/ved/trendVedio/:id
videoRouter.get('/trend/:id', trendVideo)


// randomVedio api 
// localhost:8000/ved/random
videoRouter.get('/random', randomVideo)


// subcribeVedio api 
// localhost:8000/ved/sub
videoRouter.get('/sub', verifyToken, subVideo)


// get tagsVedio api 
// localhost:8000/ved/tags
videoRouter.get('/tags', tagsVideo)


// get searchVedio api 
// localhost:8000/ved/search
videoRouter.get('/search', searchVideo)







export default videoRouter