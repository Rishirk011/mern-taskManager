import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
    {
        user:{
            userId:mongoose.Schema.Types.ObjectId,
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

const taskModel = mongoose.model('taskList',taskSchema);

export default taskModel;