const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type : String,
            required:true,
            minlength:[3,'First name must be at least 3 characters long']
        },lastname:{
            type: String,
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength: [ 3, 'Email must be at least 3 characters long' ],
    },
    password:{
        type:String,
        required:true,
        select:false
    }
},{ timestamps: true });


userSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=await bcrypt.hash(this.password,10);
    next();
})

const userModel=mongoose.model('User',userSchema);
module.exports=userModel;