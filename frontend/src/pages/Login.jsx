const Login = () => {

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
                        placeholder="email"/>
                    
                    </div>

                    <div className="mb-4">

                        <label htmlFor="password"
                        className="form-label">
                            password
                        </label>
                        
                        <input type="password" 
                        className="form-control"
                        placeholder="password"/>

                    </div>

                    <div className="btn-group 
                    d-grid">
                
                        <button className="btn btn-primary
                        ">
                            Login
                        </button>
                    
                    </div>
                
                </form>

            </div>
        </div>


}

export default Login;