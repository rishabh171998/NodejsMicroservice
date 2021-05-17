const { response } = require('express');
const {ExpressApp}=require('../../base/base-ms');
const {createErrorResponse } = require('../../utils/error-util');
const {comparePassword}=require('./auth-util');
const {userUtil}=require('./auth-util');
const asMain=(require.main===module)

class AuthApp extends ExpressApp{
    constructor(context)
    {
        super(context);
        this.options=context
    }

    registerRoutes()
    {
        super.registerRoutes();
        const invokeAsync = this.invokeAsync.bind(this);
        this.router.post('/login',invokeAsync(this.handleLogin));
        this.router.post('/register',invokeAsync(this.handleRegister));
    }
    async handleLogin(req) {
        let doc = req.body;
        console.log(doc)
        try {
            const user = await userUtil('http://localhost:3002','/user/getUser','GET',doc);
            console.log(user.body);

            if(!user.body) {
                return await createErrorResponse(401,'user.not.active',"Email Not Verified")
            }
            const isValidPassword = await comparePassword(doc.password, user.body.cred_id.password);
            if(!isValidPassword) {
                return await createErrorResponse(500,'password.not.authenticated',"Password Not Authenticated")
            }
            delete user.body.cred_id.password;
            return {
                status: 200,
                content:user
            }
        }catch(err) {
            return await createErrorResponse(err.statusCode, err.message);
        }
    }
    async handleRegister(req)
    {
       let doc=req.body;
           const response =await userUtil('http://localhost:3002','/user/insertUser','POST',doc);
           if(response.status===200)
           return {
            status: 200,
            content: response.body
        }
   return {
       status: response.statusCode,
       content: response.body
   }    
}
}
if(asMain) {
    let context = {
        PORT : 3000
    }
    new AuthApp(context).run();
}