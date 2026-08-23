import "dotenv/config";
import express from 'express';
import {connectDb} from "./config/Db.js";
import cors from 'cors';

const APP = express();
APP.use(express.json());
APP.use(cors());




connectDb()
.then(()=>{
    APP.listen(process.env.PORT,()=>{
        console.log("PORT IS running"); 
    })
})
.catch((err)=>{
    console.log(err.message);
});

