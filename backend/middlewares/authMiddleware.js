import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

const protect = (asyncHandler(async (req,res,next) => {
    
    let token;
    if(req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
        ){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user = await userModel.findById(decoded.id).select('-password');
            if (!req.user) {
                res.status(401);
                throw new Error("User no longer exists");
            }
            next();
        }
        catch(err){
            res.status(401);
            throw new Error(err.message);
        }
    }
    if(!token){
        res.status(401);
        throw new Error("not found");
    }
    
}));

export default protect;
