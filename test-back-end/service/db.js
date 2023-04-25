//database connection


//importing mongoose
const mongoose=require("mongoose")

//using mongoose,definbe connection between mongodb and express
mongoose.connect('mongodb://localhost:27017/Test')

//create a model/scheme for storing data
const User=mongoose.model("User",{
    firstname:String,
    lastname:String,
    address:String,
    email:String,
    phone:String,
    gender:String,
    course:String


})

//exporting the data
module.exports={
    User
}