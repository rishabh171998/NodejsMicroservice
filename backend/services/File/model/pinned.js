let mongoose=require('mongoose');
let schema =mongoose.Schema;
let Pinschema =new schema(
    {
      cid:
      {
          type:String,
          required:true,
          unique:true
      },
      file_metaData:
      {
          file_size:
          {
              type:Number
          },
          file_type:
          {
              type:String
          },
          mime_type:
          {
              type:String
          }
      },
      owner:[{
         type:schema.Types.ObjectId,
         ref:'User',
         name:
         {
             type:String
         } 
      }]
    }
)
const Pin=mongoose.model('Pin',Pinschema);
module.exports=
{
    Pin:Pin
}