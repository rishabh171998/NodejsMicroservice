const express =require('express');
const mongoose=require('mongoose')
const cors =require('cors');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json());
mongoose.connect("mongodb+srv://rishabh:rish123@cluster0.ohd1b.mongodb.net/distrybute?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB CONNECTED")
});
app.listen('3000',()=>{
    console.log(`Running on http://localhost`)
})