import {create} from 'zustand';


const useAuthStore = create((set)=>({
    user:JSON.parse(localStorage.getItem('user')) || null,
    token:localStorage.getItem('token') || null,
    error:null,

    registerUser:async (userName,email,password) => {
        try{
            const response = await fetch("http://localhost:3000/usercollections/register",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({userName,email,password})
            });

            if(!response.ok) throw new Error("failed to register");


            
        }
        catch(err){
            set({error:err.message})
        }
    },

    loginUser:async (email,password) => {
        try{
            const response = await fetch('http://localhost:3000/usercollections/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email,password})
            });

            if(!response.ok) throw new Error("failed to login");
            
            const data = await response.json();
            
            set({user:data, token:data.token});
            
            localStorage.setItem('token',data.token);
            localStorage.setItem('user',JSON.stringify(data));
            
        }
        catch(err){

        }
    },

    logOut: () => {
        set({ user: null, token: null });
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

}))

export default useAuthStore;