const mongoose = require("mongoose");


const connectDB = async () => {
await mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected to database")
}

module.exports = connectDB