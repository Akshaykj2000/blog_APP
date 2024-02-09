const express =require("express")
const signUpModels =require("../model/signUpModel")
const bcrypt =require("bcryptjs")


const router = express.Router()

hashPaswordGenerator =async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup", async(req,res)=>{
    let {data} = {"data":req.body}
      let password =data.password
        hashPaswordGenerator(password).then(
            (hashedPassword)=>{
                console.log(hashedPassword)
                data.password=hashedPassword
                console.log(data)
                
                 let user =new signUpModels(data)
                let result =user.save()
                
                res.json({status:"success"})
            }
        )

   
})

module.exports =router


