const express = require("express")
const cors = require("cors")
const mongoose =require("mongoose")
const blogRouter=require("./controller/blogRoter")
 
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://akshaykj:akshaykj@cluster0.3vob5wn.mongodb.net/blogDb?retryWrites=true&w=majority",{
    useNewUrlParser :true
})

app.use("/blog",blogRouter)

app.listen("3000",()=>{
    console.log("Server running........")
})