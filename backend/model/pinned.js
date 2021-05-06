let mongoose=require('mongoose');
let schema =mongoose.Schema;
let Pinschema =new schema(
    {

    }
)
const Pin=mongoose.model('Pin',Pinschema);
module.exports=
{
    Pin:Pin
}