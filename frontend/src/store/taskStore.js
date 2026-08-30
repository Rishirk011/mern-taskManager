import {create} from 'zustand'

const useTaskStore = create((set)=>({

    tasks:[],
    loading:false,
    error:null,

    getTasks:async () => {
        const token = localStorage.getItem('token');
        set({loading:true,error:null});
        try{
            const response = await fetch('http://localhost:3000/taskcollections',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            if(!response.ok) throw new Error("failed to get the data");
            const data = await response.json()
            
            set({tasks:data, loading:false});
        }
        catch(err){
            set({error:err.message,loading:false});
        }
    },

    addTasks:async(task,description)=>{
        const token = localStorage.getItem('token');

        set({loading:true,error:null});
        try{
            const response = await fetch('http://localhost:3000/taskcollections',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify({task,description})
            });
            if(!response.ok) throw new Error("failed to add a new task");
            const data = await response.json();
            set((state)=>({tasks:[...state.tasks,data],loading:false}))
        }
        catch(err){
            set({error:err.message,loading:false});
        }
    },

    updateTasks:async (task,description,id) => {
        const token = localStorage.getItem('token');

        set({loading:true,error:null});
        try{
            const response = await fetch(`http://localhost:3000/taskcollections/${id}`,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json',
                    'Authorization':`Bearer ${token}`
                },
                body:JSON.stringify({task,description})
            });
            if(!response.ok) throw new Error("failed to update");
            const data = await response.json();
            set((state)=>({
                tasks:state.tasks.map((item)=> item._id === id? data: item),
                loading:false
            }));
        }
        catch(err){
            set({error:err.message,loading:false});
        }
    },

    deleteTasks:async (id) => {
        const token = localStorage.getItem('token');

        set({loading:true,error:null});
        try{
            const response = await fetch(`http://localhost:3000/taskcollections/${id}`,{
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });

            if(!response.ok) throw new Error("failed to delete");
            
            set((state)=>({
                tasks:state.tasks.filter((task)=> task._id !== id)
            ,loading:false}));

        }
        catch(err){
            set({error:err.message,loading:false});
        }
    }

}));

export default useTaskStore;