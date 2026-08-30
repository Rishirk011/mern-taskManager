import EditComponent from "../../components/editTask/EditComp";
import styles from '../home/home.module.css';
import ListItem from "../../components/listItem/ListItem";
import { useEffect, useState } from "react";
import useTaskStore from "../../store/taskStore.js";
import useAuthStore from "../../store/authStore.js";
import { useNavigate } from "react-router";

const Home = () =>{
    
    const navigate = useNavigate();
    const {logOut} = useAuthStore();
    const [editId, setEditId] = useState(-1);

    const [task,setTask] = useState("");
    const [description,setDescription] = useState(""); 

    const {
        tasks,
        getTasks, 
        addTasks, 
        updateTasks, 
        deleteTasks
    } = useTaskStore();

    const {user} = useAuthStore();
    useEffect(()=>{
        getTasks();
    },[])

    const logoutUser = () =>{
        logOut();
        navigate('/login');
    } 

    return <>
        <div className={styles.container}>
            
            <div className="sub-container">
            
                <div className="title" 
                style={{textAlign:'center',paddingTop:'0.4rem'}}>

                    <h1>Task manager mern
                        {" "} <button onClick={()=>{logoutUser()}}>
                            logout
                        </button>
                    </h1>
                    <h5>
                        {user.email}
                    </h5>

                </div>

                <div className="taskContainer">
                    
                    <div className="addTask">
                        
                        <input type="text" 
                        placeholder="enter task name"
                        onChange={(e)=>setTask(e.target.value)}/>

                        <input type="text" 
                        placeholder="enter description"
                        onChange={(e)=>setDescription(e.target.value)}/>

                        <button onClick={()=>addTasks(task,description)}> 
                            add
                        </button>
                    </div>

                    <div className={styles.taskList}>
                        
                        <ul style={{listStyle:'none', textAlign:'center'}}>
                             
                            {
                                tasks && tasks.map((item)=>(
                                    
                                    editId !== item._id? 
                                    
                                    <li key={item._id}> 
                                        <ListItem editId={editId} setEditId={setEditId}
                                        title={item.task} description ={item.description}
                                        id={item._id}/> 
                                    </li>:                              
                                    
                                    <li key={item._id}> 
                                        <EditComponent id={item._id} setEditId={setEditId}/> 
                                    </li>
                                ))
                            }
                        </ul>
                    </div>    

                
                </div>
            
            </div>

        </div>
        
    </>

}

export default Home;