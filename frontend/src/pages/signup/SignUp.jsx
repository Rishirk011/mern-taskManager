import { useState } from "react";
import { Link, useNavigate } from "react-router";
import 
    useAuthStore
 from "../../store/authStore";

import styles from "../signup/signup.module.css";


const SignUp = () =>{

    const {registerUser} = useAuthStore();

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async(e)=>{
        
        e.preventDefault();

        if(!userName || !email || !password){
            alert("fields are empty");
            return;
        }

        await registerUser(userName, email, password);
        
        navigate('/login');

    }


    return <>
        <div className={styles.container}>
            
            <div className={styles.form} style={{maxWidth:'100%',width:"400px",
                padding:'1rem'
            }}> 

                <h3 className="text-center">
                    Sign up
                </h3>
            
                <form style={{padding:'1rem'}}>
                    
                    <div style={{marginTop:'1rem'}}>   
                    
                        <label htmlFor="name"
                        className="form-label ">
                            name:
                        </label>
                        &nbsp;
                        <input type="text" 
                        className="form-control" onChange={(e)=>setUserName(e.target.value)}/>
                    
                    </div>
                    
                    <div style={{marginTop:'1rem'}}>   
                    
                        <label htmlFor="e-mail" className="form-label">
                            e-mail:
                        </label>
                        &nbsp;
                        <input type="email" 
                        className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                    
                    </div>
                    
                    <div style={{marginTop:'1rem'}}>   
                    
                        <label htmlFor="password" 
                        className="form-label">
                            password:
                        </label>
                        &nbsp;
                        <input type="password" 
                        className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                    
                    </div>
                    
                    <div style={{marginTop:'1rem'}}>   
                    
                        <button className={styles.submit} onClick={(e)=>handleSignUp(e)}>
                            submit
                        </button>
                    
                    </div>
                </form>
                <p className="text-center">
                    already have an account? 
                    <Link to={'/Login'}> login</Link>
                </p>
            </div>
        </div>
    </>
}
export default SignUp;