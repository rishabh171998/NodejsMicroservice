let mongoose=require('mongoose');
const validator=require('validator');
let schema =mongoose.Schema;
let Credschema =new schema(
    {
      email:
      {
          unique:true,
          type:String,
          required:true,
          trim:true,
          lowercase:true,
          validate:
          {
              validator: validator.isEmail,
              message:'{VALUE} is not a cvalid email',
              isAsync:false
          }
      },
      password:
      {
          type:String,
          default:null,
      },
      date_created:
      {
          type:String,
          default:new Date()
      }
    }
)
const Credential=mongoose.model('Cred',Credschema);
module.exports=
{
    Cred:Credential
}