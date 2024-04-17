import mongoose, { Schema } from "mongoose"


const hospitalSchema = new Schema({
    hospitalName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String
    }
},{timestamps: true})


export const Hospital = mongoose.model('Hospital',hospitalSchema)