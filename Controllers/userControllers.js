import { Bootcamp } from "../model/bootcampSchema.js"



const GetUser = async(req,res)=>{
    try {
       const data = await Bootcamp.find();
       res.send({data:data,message:"sucess"})
       
    }catch(err){
        res.send("an error occured ")
    }
}

const PostUser = async(req,res)=>{
   const fullname = req.body.fullname
   const email = req.body.email
   const phonenumber = req.body.phonenumber
   const gender = req.body.gender
   const ecb = req.body.ecb
  const  he = req.body.he
    try {
        Bootcamp.create(req.body)
        res.send("data inserted sucessfully")
    }catch(err){
        console.log(err)
        res.send("an error occured ")
    }
}

export {PostUser,GetUser}