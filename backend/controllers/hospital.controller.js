
import jwt from "jsonwebtoken"
import { uploadToCloudinary } from "../utils/cloudinary.js"
import { Hospital } from "../models/hospital.model.js"
import { Doctor } from "../models/doctor.model.js"


export const registerHospital = async(req, res) => {
    try {
        const {hospitalName, email, password} = req.body

        if([hospitalName, email, password].some((item)=> item.trim() === "")){
            throw new Error("All the crediantials are required")
        }

        const existingHospital = await Hospital.findOne({
            $or: [{hospitalName}, {email}]
        })

        if(existingHospital){
            throw new Error("Hospital already exists")
        }

        const registerHospital = await Hospital.create({
            hospitalName,
            email,
            password
        })

        if(!registerHospital){
            throw new Error("Error while registering hospital")
        }

        return res
        .status(200)
        .json({
            msg:"Successfully registered the hospital",
            data: registerHospital,
            success: true
        })
    } catch (error) {
        console.error("Error while registering hospital:", error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}
    

export const loginHospital = async(req, res) => {
    try {
        const {email, password} = req.body

        if([email, password].some((item)=> item.trim() === "")){
            throw new Error("All the crediantials are required")
        }

        const existingHospital = await Hospital.findOne({
            email,
            password
        })

        if(!existingHospital){
            throw new Error("Hospital not found, Please check your credentials")
        }

        const token = jwt.sign({hospitalId: existingHospital._id},"helloWorld")

        return res
        .status(200)
        .cookie("hospitalToken", token)
        .json({
            msg:"Successfully logged in",
            data: existingHospital,
            success: true,
            token
        })
    } catch (error) {
        console.error("Error logging hospital :", error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const logoutHospital = async(req, res) => {
    try {
        const hospital = req.hospital

        const checkingHospital  = await User.findOne({
            _id:hospital._id,
        })

        if(!checkingHospital){
            return res.status(404).json({
                message: "Hospital not found"
            })
        }

        return res
        .status(200)
        .clearCookie("hospitalToken")
        .json({
            message: "Successfully logged out",
            success: true
        })
    } catch (error) {
        console.error("Error Logging out Hospital:", error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}



export const createDoctor = async(req, res) => {
    try {
        const {doctorName, nmcNo, gender,qualification,department,charge} = req.body

        const hospitalId = req.hospital._id

        console.log(req.body)

        if([doctorName, nmcNo, gender,qualification,department,charge].some((item)=> item.trim() === "")){
            throw new Error("All the crediantials are required")
        }


        const existingDoctor = await Doctor.findOne ({
            $or: [{doctorName},{nmcNo}, {hospital:hospitalId}]
        })

        if(existingDoctor){
            return res.status(400).json({
                message: "Doctor already exists"
            })
        }

        const localFilePath = req.file.path

        console.log(localFilePath)

        let imagePath;

        if(localFilePath){
            imagePath = await uploadToCloudinary(localFilePath)
        }

        console.log(imagePath)

        if(!imagePath){
            throw new Error("Error while uploading image")
        }

        const newDoctor = await Doctor.create({ avatar: imagePath.url || "",doctorName, nmcNo, gender,qualification,department,charge, hospital:hospitalId });

        return res.status(201).json({
            msg: "Doctor created successfully",
            data: newDoctor,
            success: true
        });
        
    } catch (error) {
        // console.error("Error creating Doctor:", error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}

