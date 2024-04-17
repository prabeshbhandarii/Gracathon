

const express = require("express");
const cookieParser = require('cookie-parser')

const app = express();


app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("Welcome")
})


app.listen(8080, (req, res) => {
    console.log("listening on port 8080")
})