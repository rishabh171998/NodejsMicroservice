let mongoose=require('mongoose');
let schema=mongoose.Schema
let Credschema =new schema(
    {
      cred_id:
      {
         type:String,
         unique:true
      },
      email:
      {
          unique:true,
          type:String,
          required:true
      },
      password:
      {
          type:String,
          default:null
      },
      date_created:
      {
          type:String,
          default:new Date()
      }
    }
)
module.exports=mongoose.model("Cred",Credschema);