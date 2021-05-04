let mongoose=require('mongoose');
let Credschema =new schema(
    {
      cred_id:
      {
         type:String,
         unique:true
      },
      email:
      {
          type:String,
          required:true
      },
      date_created:
      {
          type:String,
          default:new Date()
      }
    }
)
const User=mongoose.model("Cred",Credschema);
module.exports=User