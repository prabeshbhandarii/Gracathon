import mongoose, { Schema } from "mongoose"


const doctorSchema = new Schema({
    avatar:{
        type: String
    },
    doctorName: {
        type: String,
        required: true
    },
    nmcNo: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    charge:{
        type: String,
    },
    hospital:{
        type: Schema.Types.ObjectId,
        ref: "Hospital"
    }
},{timestamps: true})


export const Doctor = mongoose.model('Doctor',doctorSchema)
