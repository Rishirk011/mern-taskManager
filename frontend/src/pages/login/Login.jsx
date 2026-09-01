import { useState } from "react";
import useAuthStore from "../../store/authStore"
import { useNavigate } from "react-router";
import styles from '../login/login.module.css';


const Login = () => {

    const {loginUser} = useAuthStore();

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin= async(e)=>{
        
        e.preventDefault();

        if(!email || !password){
            alert("empty fields");
            return;
        }

        await loginUser(email,password);
        
        navigate('/');
    }

    return <div className={styles.login}>
            
            <div style={{maxWidth:"100%", width:"400px",
                border:'2px solid blue', padding:'1rem',borderRadius:'20px',
                backgroundColor:'white'
            }}>
                
                <h4 style={{textAlign:'center', marginTop:'0.5rem',
                }}>
                    Login
                </h4>
                
                <form style={{textAlign:'center', padding:'1rem',
                }}>
                    
                    <div style={{marginTop:'1rem'}}>
                    
                        <label htmlFor="email"
                        className="form-label">
                            email:
                        </label>
                        &nbsp;
                        <input type="email" 
                        className="form-control"
                        placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                    
                    </div>

                    <div style={{marginTop:'1rem'}}>

                        <label htmlFor="password"
                        className="form-label">
                            password:
                        </label>
                        &nbsp;
                        <input type="password" 
                        className="form-control"
                        placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>

                    </div>

                    <div style={{marginTop:'1rem'}}>
                
                        <button className={styles.submitBtn}
                         onClick={(e)=>handleLogin(e)}>
                            Login
                        </button>
                        <button onClick={()=>navigate('/signup')} className={styles.signupBtn}>
                            Signup
                        </button>
                    </div>
                
                </form>

            </div>
        </div>


}

export default Login;