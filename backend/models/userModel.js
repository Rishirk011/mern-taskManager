import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName:{
            type:String,  
            required:[true,'please add a name'],
        },
        email:{
            type:String,
            requried:[true,'please add an email'],
            unique:true
        },
        password:{
            type:String,
            required:[true,'please add a passwd']
        }
    },
    {
        timestamps:true
    }
)

const userModel = mongoose.model('users',userSchema);

export default userModel;
