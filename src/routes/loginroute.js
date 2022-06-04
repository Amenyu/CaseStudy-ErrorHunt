const express = require('express'); 
const loginRouter = express.Router();
// const user = require('../data/user');
const userdata = require('../model/UserModel');

loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})


loginRouter.get("/check",function(req,res){
    var checkuser = {
        uid:req.query.uid,    //#10 Part 2
        pwd:req.query.pwd
    };
    var flag=false;
    userdata.find()     
    .then(function (user) {
        for(let i=0;i<user.length;i++){
        
            if(checkuser.uid==user[i].uid && checkuser.pwd==user[i].pwd){
                flag=true;
                break;
            }
            else{
                flag=false;
            }
        }
        console.log("flag",flag);
        if(flag==true){
            // alert("User Verified.Click to continue");
            res.redirect("/home")
        }
        else{
            // alert("User Verification Failed");
            res.redirect("/signup");
        }

    });
    
});




module.exports = loginRouter;