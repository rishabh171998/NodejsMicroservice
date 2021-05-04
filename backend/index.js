const express =require('express');
const mongoose=require('mongoose')
const cors =require('cors');
const app=express();
const dotenv=require('dotenv');
//const register=require('./routes/register');
//const login=require('./routes/login')
dotenv.config();
const PORT=process.env.PORT
const URI=process.env.URI
const API_VERSION=process.env.API_VERSION;
app.use(express.json());
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB CONNECTED")
});
//app.use(`/v${API_VERSION}/api/register`,register)
//app.use(`/v${process.env.API_VERSION}/api/login`,login)
app.listen(PORT,()=>{
    console.log(`Running on http://localhost:`+`${process.env.PORT}`)
})