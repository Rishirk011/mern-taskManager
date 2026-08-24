import {taskModel} from "../models/taskModel.js"
import asyncHandler from "express-async-handler";

export const getTasks = (asyncHandler(async(req,res)=>{

    const tasks = await taskModel.find({user:req.user.id})
    .sort({createdAt:-1})

    console.log(tasks);
    
    
    res.status(200).json(tasks);

}))

export const addTask = (asyncHandler(async (req,res) => {

    const {task,description} = req.body;

    if(!task || !description){
        res.status(400);
        throw new Error("fields are empty");
    }
    
    if(!req.user.id){
        res.status(400);
        throw new Error("user not found");
    }

    const addTasks = await taskModel.create({
        task,
        description,
        user:req.user._id
    });
    
    res.status(201).json(addTasks);
}));



export const updateTasks = (asyncHandler(async (req,res) => {
    
    const {task, description} = req.body;
    const id = req.params.id;

    console.log(req.user._id);
    
    const findTask = await taskModel.findById(id);

    if(!findTask){
        res.status(400);
        throw new Error("invalid");
        
    }

    if(findTask.user.toString() !== req.user.id){
        res.status(400);
        throw new Error("user is invalid");
    }

    if(!task || !description){
        res.status(400);
        throw new Error("field is empty");
    }

    const updateTask = await taskModel.findByIdAndUpdate(
        id,
        {task,description},
        {returnDocument:'after'}
    )

    res.status(200).json(updateTask);
}));

export const deleteTasks = (asyncHandler(async(req,res)=>{

    const id = req.params.id;

    const deleteTask = await taskModel.findById(id);

    if(!deleteTask){
        res.status(404);
        throw new Error("task not found");
    }
    if(deleteTask.user.toString() !== req.user.id){
        res.status(400);
        throw new Error("user is invalid");
    }
    
    await deleteTask.deleteOne();
    res.status(200).json({id});

}));
