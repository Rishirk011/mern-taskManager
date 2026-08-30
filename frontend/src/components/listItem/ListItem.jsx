import useTaskStore from "../../store/taskStore";
import styles from "../listItem/listItem.module.css";

const ListItem = ({editId,setEditId,title,description, id}) => {

    const {deleteTasks} = useTaskStore();

    const deleteTask = async()=>{
        await deleteTasks(id);
    }

    return <>
        <div style={{
            backgroundColor: 'green', borderRadius: '10px', margin:'0.5rem',padding: '0.25rem', display: 'flex',
            justifyContent: 'space-around', alignItems: 'center'
        }}>

            <div style={{ margin: '0.5rem' }}>
                <b>
                    {title}
                </b>
                <br />
                <span>
                    {description}
                </span>
            </div>

            <div className="btns" style={{ display: 'inline-flex', gap: '0.5rem' }}>

                <button style={{ padding: '0.2rem', border: 'none', borderRadius: '0.5rem' }} className={styles.editBtn}
                onClick={()=>setEditId(id)}
                >
                    edit
                </button>

                <button style={{ padding: '0.2rem', border: 'none', borderRadius: '0.5rem' }} className={styles.deleteBtn}
                onClick={deleteTask}>
                    remove
                </button>

            </div>

        </div>

    </>
}

export default ListItem;