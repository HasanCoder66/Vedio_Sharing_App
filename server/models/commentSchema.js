import mongoose from "mongoose"
const commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    
    vedioId: {
        type: String,
        required: true,
    },

    desc: {
        type: String,
        required: true,
    },

},
    
{timestamps : true}
)

export default mongoose.model('Comment', commentSchema)  