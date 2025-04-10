const ContactModel = require("../models/ContactModel.js");
 
 module.exports.Addcontact=async(req,res)=>{
    const {name,email,phoneno,message}=req.body;
    const isContactAlready=await ContactModel.findOne({email});
    if(isContactAlready){
        return res.status(400).json({message:'Contact already exist'});
    }
    const contact=await ContactModel.create({
        name,
        email,
        phoneno,
        message
    });
    res.status(200).json({message:'Contact added',contact});
}

module.exports.Getcontact=async(req,res)=>{
    try {
        const contacts=await ContactModel.find({});
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error in Getcontacts:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

