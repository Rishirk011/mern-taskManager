import {Route, Routes} from "react-router" ;
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
const App = () =>{

  return<>
    
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      

  </>

}

export default App;