import {Route, Routes, Navigate} from "react-router" ;
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import useAuthStore from "./store/authStore";



const ProtectedRoute = ({ children }) => {
    const { token } = useAuthStore();
    return token ? children : <Navigate to='/Login' />;
}

const App = () =>{

  return<>
    
      <Routes>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" 
        element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }
        />
      </Routes>
      

  </>

}


export default App;