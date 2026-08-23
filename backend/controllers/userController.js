import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';

export const registerUser = (asyncHandler(async (req,res) => {
    
    const {userName,email,password} = req.body;

    if(!userName || !email || !password){
        res.status(400);
        throw new Error("enter the fields");
    }

    const userExists = await userModel.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("user already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await userModel.create({
        userName,
        email,
        password:hashedPassword
    });
    
    if(user){
        res.status(201).json({
            _id:user.id,
            userName:user.userName,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("invalid user data");
    }


}));

export const loginUser = (asyncHandler(async (req,res) => {
    
    const {email,password} = req.body;

    const user = await userModel.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){

        res.json({
            _id:user.id,
            email:user.email,
            token: generateToken(user._id)
        })

    }

    else{

        res.status(400);
        throw new Error("invalid credentials");
        
    }

}));

export const getMe = (asyncHandler(async (req,res) => {
    res.status(200).json(req.user);
}))


const generateToken = (id)=>{

    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:'30d'
    })

}