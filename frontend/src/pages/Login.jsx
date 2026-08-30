import { useState } from "react";
import useAuthStore from "../store/authStore"
import { useNavigate } from "react-router";

const Login = () => {

    const {loginUser} = useAuthStore();

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin= async(e)=>{
        e.preventDefault();
        await loginUser(email,password);
        navigate('/');
    }

    return <div className="container-fluid
        d-flex justify-content-center
        align-items-center min-vh-100
        " style={{backgroundColor:"aliceblue"}}>
            
            <div className="card shadow-sm
            p-4"    style={{maxWidth:"100%", width:"400px"}}>
                
                <h4 className="text-center">
                    Login
                </h4>
                
                <form action=""
                className="p-3">
                    
                    <div className="mb-4">
                    
                        <label htmlFor="email"
                        className="form-label">
                            email
                        </label>
                    
                        <input type="email" 
                        className="form-control"
                        placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                    
                    </div>

                    <div className="mb-4">

                        <label htmlFor="password"
                        className="form-label">
                            password
                        </label>
                        
                        <input type="password" 
                        className="form-control"
                        placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>

                    </div>

                    <div className="btn-group 
                    d-grid">
                
                        <button className="btn btn-primary
                        " onClick={(e)=>handleLogin(e)}>
                            Login
                        </button>
                    
                    </div>
                
                </form>

            </div>
        </div>


}

export default Login;