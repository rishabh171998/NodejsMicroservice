const express=require('express');
const router=express.Router();
const registerController=require('../controllers/registration');

router.post('/',registerController.register);

module.exports=router;