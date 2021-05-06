let mongoose=require('mongoose');
let schema =mongoose.Schema;
let Userschema =new schema(
    {
    cred_id:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cred'
    },
    First_Name:
    {     
     type:String,
     required:true
    },
    Last_Name:
    {
        type:String,
        required:true
    },
    Subscription:
    {
        type:String,
        enum:['FREE','PAID'],
        default:'FREE'
    },
    planID:
    {
        type:schema.Types.ObjectId,
        ref:'PLANS'
    },
    StorageDetails:
    {
        storageSize:
        {
            type:Number,
            default:0
        },
        storageLimit:
        {
            type:Number,
            default:5120
        }
    }
    }
)
const User=mongoose.model('User',Userschema);
module.exports=
{
    User:User
}