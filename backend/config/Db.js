import mongoose from 'mongoose';

export const connectDb = async () => {
    
    await mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("db connected successfully");
    })
    .catch((err)=>{
        console.log(err.message);
    })

}


