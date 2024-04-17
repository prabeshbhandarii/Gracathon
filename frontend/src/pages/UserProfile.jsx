import React, { useContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../utils/userContext.jsx";
import axios from "axios";



function UserProfile() {

    const { userData } = useContext(UserContext);

    const fileRef = useRef();




    const [formData, setFormData] = useState({
        username: userData?.data.username,
        email: userData?.data.email,
        password: userData?.data.password
    });

    console.log(formData)

    const navigate = useNavigate()



    function handleChange(e) {
        setFormData((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ));
    }



    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:3000/api/v1/user/update", formData)

            console.log(res)

            const data = res.data

            console.log(data);

            if (!data.success) {

                throw new Error("Error while updating user")

            } 

            const obj = {
                username: data.username,
                email: data.email,
                password: data.password
            }

            setFormData(obj)

            updateUser(data)


            localStorage.setItem("user", JSON.stringify(data))

            navigate("/")


        } catch (error) {
            console.log("Error while updating user")
        }

    }

    async function handleLogout() {

    }


    return (
        <>

            <div className="w-10/12 mx-auto">
                <form className="w-4/12 mx-auto flex  flex-col gap-7 py-20">
                    <div className="flex justify-center items-center">
                        <div className="w-32 h-32  rounded-full  bg-yellow-500">
                            <img src="./src/assets/Butwalhos.jpg" alt="" className="w-32 h-32 rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="mb-5">

                        <input type="text" id="email" onChange={handleChange} value={formData.username} name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Username" required />
                    </div>

                    <div className="mb-5">
                        <input type="email" id="email" onChange={handleChange} value={formData.email} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@flowbite.com" required />
                    </div>

                    <div className="mb-5">
                        <input type="text" id="password" onChange={handleChange} value={formData.password} name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter a Password" required />
                    </div>

                    <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                </form>
            </div>
        </>



    );
}

export default UserProfile;