import "dotenv/config";
import express from 'express';
import {connectDb} from "./config/Db.js";
import cors from 'cors';
import { router } from "./routes/routes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

const APP = express();

APP.use(express.json());
APP.use(cors());
APP.use(router);
APP.use(errorHandler);

console.log(process.env.JWT_SECRET);

connectDb()
.then(()=>{
    APP.listen(process.env.PORT,()=>{
        console.log("PORT IS running"); 
    })
})
.catch((err)=>{
    console.log(err.message);
});

