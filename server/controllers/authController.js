import mongoose from "mongoose"
import User from '../models/userSchema.js'
export const register = async (req , res) => {
    try {
        const newUser = new User ({
            userName : req.body.name,
            email : req.body.email,
            password : req.body.password
        })
        
    } catch (error) {
        
    }
    // if(req.body.userId === req.params.id )
}



export const login = (req , res) => {
    // if(req.body.userId === req.params.id )
    // const user = new User.findBy
}


export const google = (req , res) => {
    // if(req.body.userId === req.params.id )
    // const user = new User.findBy
}