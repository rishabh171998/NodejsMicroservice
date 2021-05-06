const {Cred}=require('../model/cred');
const {User}=require('../model/user')
const bcrypt =require('bcryptjs')
const jwt=require('jsonwebtoken')


module.exports.register=async (req,res,next)=>
{
    const email=req.body.email;
    const password=req.body.password;
    const First_Name=req.body.fname;
    const Last_Name=req.body.lname;
    console.log(email);
    if(!email||!password)
    {
        next(new Error("Invalid Parameters"));
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
           email:email,
           password:hashPassword
       }
   )
   try{
       const credSaved=await cred.save()
       const user= new User(
           {
               cred_id:credSaved._id,
               First_Name:First_Name,
               Last_Name:Last_Name
           }
       )
       const SavedUser=await user.save()
       res.status(200).send(credSaved);
   }catch(err)
   {
  res.status(400).send(err);
   }
}