import { useState } from "react";
import styles from "../editTask/editTask.module.css";
import useTaskStore from "../../store/taskStore";

const EditComponent = ({id, setEditId }) => {
    
    const {updateTasks} = useTaskStore();
    const [editedTask,setEditedTask] = useState("");
    const [editedDescription,setEditedDescription] = useState("");

    const updateTask=async () => {
        await updateTasks(editedTask,editedDescription,id);
        setEditId(-1);
    }
    return <>
        <div style={{
            backgroundColor: 'green', borderRadius: '10px', padding: '0.25rem', display: 'flex',
            justifyContent: 'space-around', alignItems: 'center'
        }}>

            <div style={{ margin: '0.5rem' }}>

                <p>
                    <input type="text" placeholder="task" onChange={(e)=>setEditedTask(e.target.value)}/>
                    <input type="text" placeholder="decription" onChange={(e)=>setEditedDescription(e.target.value)}/>
                </p>


            </div>

            <div className="btns" style={{ display: 'inline-flex', gap: '0.5rem' }}>

                <button style={{ padding: '0.2rem', border: 'none', borderRadius: '0.5rem' }} className={styles.editBtn}
                onClick={updateTask}>
                    change
                </button>

                <button style={{ padding: '0.2rem', border: 'none', borderRadius: '0.5rem' }} className={styles.deleteBtn}
                onClick={()=>setEditId(-1)}>
                    cancel
                </button>

            </div>

        </div>

    </>

}

export default EditComponent;