const express = require('express')
const userRoute = require('./routes/userRoute')
const productRoute= require('./routes/productRoutes')
require("dotenv").config()
const connectDB = require('./config/connectdb')

const app = express()

connectDB()



app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/products",productRoute)


//home route
app.get("/", (req, res) => {
    res.send("welcome to africonnect")
})


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("server is running on port " + port)
})