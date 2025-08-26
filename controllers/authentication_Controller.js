const users = require('../db/models/users.js');
const bcrypt = require('bcryptjs');
exports.signup = async (req,res)=>{
  try {
    const body = req.body
    const userName = body.username //from frontend
    if(!userName){
        return res.status(400).json({
            success:false,
            message:"username required"
        })
    }
    const email = body.email
    if(!email){
        return res.status(400).json({
           success:false,
            message:"Email required" 
        })
    }
    const password = body.password;
    if(!password){
        return res.status(400).json({
            success:false,
            message:"Password Required"
        })
    }

    const emailCheck = await users.findOne({
        email
    })

    if(emailCheck){
        return res.status(400).json({
            success:false,
            message:"email already exists"
        })
    }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password,salt);

  const newUser = {
    firstname : username,
    email:email,
    password:hash
  }

  const addUser = await users.create(newUser);
  
  if(addUser){
    return res.status(200).json({
        success:true,
        message:"user add successfully"
    })
  }

  } catch (error) {
    console.log(`Error While Signup`,error);
  }
}