import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'users'
        },
        task:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);

export const taskModel = mongoose.model('taskList',taskSchema);

