
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectToDb } from './db/db.js';
import userRoute from "./routes/user.route.js"
import hospitalRoute from "./routes/hospital.route.js"


const app = express();

app.use(cors(
    {
        origin:"*",
        credentials: true
    }
))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectToDb()

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.use("/api/v1/user", userRoute)
app.use("/api/v1/hospital", hospitalRoute)


app.listen(3000, (req, res) => {
    console.log("listening on port 8080")
})