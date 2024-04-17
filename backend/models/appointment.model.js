import mongoose, { Schema } from "mongoose"


const appointmentSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    hospitalId: {
        type: String,
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    schedule: {
        type: String,
        required: true
    }
},{timestamps: true})


export const Appointment = mongoose.model('Appointment', appointmentSchema)
