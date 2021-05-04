const {Cred}=require('../models/db')
const bcrypt =require('bcryptjs')
const jwt=require('jsonwebtoken')
const validator=require('../utils/validateDB');
const uuid=require('uuid');
module.exports.register=async (req,res,next)=>
{
    const email=req.body.email;
    const password=req.body.password
    if(!email||!password)
    {
        next(new Error("Invalid Parameters"));
    }
    else if(!validator.email(email))
    {
   next(new Error("Invalid Email"));
    }
    const EmailExist=await Cred.findOne({email:email}).exec();

    if(EmailExist)
    {
        return res.status(400).send("Email Already Exist");
    }
   const salt=await bcrypt.genSalt(10)
   const hashPassword=await bcrypt.hash(password,salt);

   const cred=new Cred(
       {
           cred_id:uuid.v4(),
           email:email,
           password:hashPassword
       }
   )
   try{
       const credSaved=await cred.save()
   }catch(err)
   {
  res.status(400).send(err);
   }
}