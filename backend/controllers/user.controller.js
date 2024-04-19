import { User } from "../models/user.model.js"
import jwt from "jsonwebtoken"


const createUser = async(req, res) => {
    try {
        const {username, email, password} = req.body

        const existingUser = await User.findOne ({
            $or: [{username},{email}]
        })

        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const newUser = await User.create({ username, email, password })

        if(!newUser){
            throw new Error("Something went wrong while creating the user")
        }

        const data = await User.findById({_id: newUser._id}).select("-password")

        return res.status(201).json({
            message: "User created successfully",
            data: data,
            success: true
        });
        
    } catch (error) {
        console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}



const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body

        const existingUser = await User.findOne ({
           email: email
        })

        if(!existingUser){
            return res.status(400).json({
                message: "User doesn't exists"
            })
        }

        if(existingUser.password !== password){
            return res.status(400).json({
                message: "Invalid password"
            })
        }

        const data = await User.findById({_id: existingUser._id})

        const token = jwt.sign({userId: existingUser._id}, "helloWorld")

        return res
        .cookie("userToken", token)
        .status(201)
        .json({
            message: "User Logged In Successfully",
            data: data,
            success: true,
            token
        });
        
    } catch (error) {
        console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}


const logoutUser = async(req, res) => {
    try {
        const user = req.user

        const existingUser  = await User.findOne({
            _id:user._id,
        })

        if(!existingUser){
            return res.status(404).json({
                message: "Something went wrong"
            })
        }

        return res
        .status(200)
        .clearCookie("userToken")
        .json({
            message: "Successfully logged out",
            success: true
        })
    } catch (error) {
        console.error("Error Logging out Doctor:", error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateUser = async(req, res) => {
    try {
        const {username, email, password} = req.body

        const user = req.user

        const updatedUser  = await User.findByIdAndUpdate(
            {
            _id:user._id,
        },
        {
            $set:{
                username,
                email,
                password
            }
        },
        {
            new: true
        }
    )

    if(!updatedUser){
        throw new Error("Error while updating user")
    }

    const data = await User.findById({_id: updatedUser._id})

    res.status(200).json({
        message: "Successfully updated the user",
        data: data,
        status: true
    })


    } catch (error) {
        console.error("Error while updating user:", error);
     return res.status(500).json({ message: "Internal Server Error" });
    }
}

export  {
    createUser,
    loginUser,
    logoutUser,
    updateUser
}