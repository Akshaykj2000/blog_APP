const express =require("express")
const signUpModels =require("../model/signUpModel")

const router = express.Router()

router.post("/signup", async(req,res)=>{
    let data = req.body
    let user =new signUpModels(data)
    let result =await  user.save()
    res.json({status:"success"})
})

module.exports =router
