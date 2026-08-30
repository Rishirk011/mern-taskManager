import { useState } from "react";
import { Link, useNavigate } from "react-router";
import 
    useAuthStore
 from "../store/authStore";

const SignUp = () =>{

    const {registerUser} = useAuthStore();

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async(e)=>{
        
        e.preventDefault();

        await registerUser(userName, email, password);
        
        navigate('/login');

    }


    return <>
        <div className="container-fluid
        d-flex justify-content-center align-items-center
        min-vh-100" style={{backgroundColor:"aliceblue"}}>
            
            <div className="card shadow-md
            p-4" style={{maxWidth:'100%',width:"400px"}}> 

                <h3 className="text-center">
                    Sign up
                </h3>
            
                <form className="p-4 text-start">
                    
                    <div className="mb-3">   
                    
                        <label htmlFor="name"
                        className="form-label ">
                            name
                        </label>
                    
                        <input type="text" 
                        className="form-control" onChange={(e)=>setUserName(e.target.value)}/>
                    
                    </div>
                    
                    <div className="mb-3">
                    
                        <label htmlFor="e-mail" className="form-label">
                            e-mail
                        </label>
                    
                        <input type="email" 
                        className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                    
                    </div>
                    
                    <div className="mb-4">
                    
                        <label htmlFor="password" 
                        className="form-label">
                            password
                        </label>
                    
                        <input type="password" 
                        className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                    
                    </div>
                    
                    <div className="btn-section
                    mt-3 text-center">
                    
                        <button className="btn btn-success" onClick={(e)=>handleSignUp(e)}>
                            submit
                        </button>
                    
                    </div>
                </form>
                <p className="text-center">already have an account? 
                    <Link to={'/Login'}> login</Link>
                </p>
            </div>
        </div>
    </>

}

export default SignUp;