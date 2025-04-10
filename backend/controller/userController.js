
const userModel = require('../models/UserModel.js');
const userService=require('../Services/userServices.js')
const jwt=require('../utils/jwtUtil.js');
const bcrypt=require('bcrypt');


module.exports.register=async(req,res)=>{
    
    const { fullname, email, password } = req.body;
    const isUserAlready = await userModel.findOne({ email });
    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password
    });
    const token= jwt.generateToken(user);
    res.status(201).cookie('token',token).json({token,user});
}

module.exports.login=async(req,res)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({email}).select('+password');
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token= jwt.generateToken(user);
    res.status(200).cookie('token',token).json({token,user});   
};

module.exports.profile=async(req,res)=>{
    const user=await userModel.findById(req.user.id);  
    res.status(200).json(user);
}

module.exports.logout=async(req,res)=>{
    res.clearCookie('token').json({message:'Logged out successfully'});
}


