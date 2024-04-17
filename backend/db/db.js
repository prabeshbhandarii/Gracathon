import mongoose from "mongoose";

export const connectToDb = async() =>{
try {
    await mongoose.connect('mongodb+srv://pratishbhandari2:csnO7wFnoCgIelUE@cluster0.ba59iqf.mongodb.net/')

    console.log("Successfully connected to mongodb");   

} catch (error) {
    console.log("Failed to connect with mongodb: " + error)
}
}

